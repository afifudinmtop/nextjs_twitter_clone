const { pool } = require("../utils/mysql");
const { v4: uuidv4 } = require("uuid");

const send_pesan = async (req, res) => {
  try {
    const uuid_pesan = uuidv4();
    const uuid_pengirim = req.session.user.uuid;
    const uuid_penerima = req.body.uuid_penerima;
    const pesan = req.body.pesan;

    // Simpan data ke MySQL
    pool.query(
      "INSERT INTO dm SET ?",
      {
        uuid_pesan: uuid_pesan,
        uuid_pengirim: uuid_pengirim,
        uuid_penerima: uuid_penerima,
        pesan: pesan,
      },
      (error, results, fields) => {
        if (error) throw error;
        res.json({ pesan: "sukses!" });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const list_pesan = async (req, res) => {
  const user1 = req.session.user.uuid;
  const user2 = req.body.user;

  try {
    // get data
    pool.query(
      `SELECT * FROM dm WHERE (uuid_pengirim = ? AND uuid_penerima = ?) OR (uuid_pengirim = ? AND uuid_penerima = ?);`,
      [user1, user2, user2, user1],
      (error, results, fields) => {
        if (results.length < 1) {
          return res.json([]);
        }

        // data exist
        else {
          for (let index = 0; index < results.length; index++) {
            if (results[index].uuid_pengirim == user1) {
              results[index].mine = "yes";
            } else {
              results[index].mine = "no";
            }
          }

          return res.json(results);
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

const list_dm = async (req, res) => {
  const user = req.session.user.uuid;

  try {
    // get data
    pool.query(
      `
      SELECT 
      u.uuid, 
      u.username, 
      u.nama, 
      u.gambar 
      FROM (
        SELECT DISTINCT
          CASE
            WHEN uuid_pengirim = ? THEN uuid_penerima
            ELSE uuid_pengirim
          END AS uuid_lawan_bicara
        FROM dm
        WHERE ? IN (uuid_pengirim, uuid_penerima)
      ) AS lawan_bicara
      JOIN user u ON u.uuid = lawan_bicara.uuid_lawan_bicara;
      `,
      [user, user],
      async (error, results, fields) => {
        if (error) {
          console.error(error);
          return res.status(500).send("Server error");
        }

        if (results.length < 1) {
          return res.json([]);
        } else {
          try {
            // Using Promise.all to wait for all messages to be fetched
            const messages = await Promise.all(
              results.map(
                (user2) =>
                  new Promise((resolve, reject) => {
                    pool.query(
                      `SELECT * FROM dm WHERE (uuid_pengirim = ? AND uuid_penerima = ?) OR (uuid_pengirim = ? AND uuid_penerima = ?) ORDER BY ID DESC LIMIT 1;`,
                      [user, user2.uuid, user2.uuid, user],
                      (error2, results2, fields2) => {
                        if (error2) {
                          return reject(error2);
                        }
                        resolve({
                          ...user2,
                          pesan: results2[0]?.pesan,
                          ts: results2[0]?.ts,
                        });
                      }
                    );
                  })
              )
            );

            return res.json(messages);
          } catch (error) {
            console.error(error);
            return res.status(500).send("Server error");
          }
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  send_pesan,
  list_pesan,
  list_dm,
};
