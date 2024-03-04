"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Feed from "./components/feed";
import Info from "./components/info";

export default function Page({ params }) {
  const username = params.username;
  const [feed, set_feed] = useState([]);
  const [nama, set_nama] = useState("");
  const [bio, set_bio] = useState("");
  const [user_uuid, set_user_uuid] = useState("");
  const [pribadi, set_pribadi] = useState("hidden");
  const [other, set_other] = useState("");
  const [gambar, set_gambar] = useState("avatar.png");

  const [following, set_following] = useState("0");
  const [follower, set_follower] = useState("0");

  const [button_following, set_button_following] = useState("hidden");
  const [button_follow, set_button_follow] = useState("hidden");

  useEffect(() => {
    cek_login();
  }, []);

  const cek_login = () => {
    fetch("/api/auth/session", {
      method: "GET",
      cache: "no-store",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data?.user?.isLoggedIn) {
          // pribadi
          if (data.user.username == username) {
            set_pribadi("");
            set_other("hidden");
            get_feed();
            get_user("pribadi");
          }

          // other
          else {
            set_pribadi("hidden");
            set_other("");
            get_feed();
            get_user("other");
          }
        } else {
          return (window.location.href = "/login/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_feed = () => {
    fetch("/api/post/feed_user", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        set_feed(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_user = (x) => {
    fetch("/api/user/get_user", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        set_bio(data[0].bio);
        set_nama(data[0].nama);
        set_gambar(data[0].gambar);
        set_user_uuid(data[0].uuid);

        if (x != "pribadi") {
          cek_follow(data[0].uuid);
        }

        get_stats(data[0].uuid);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const cek_follow = (x) => {
    fetch("/api/follow/cek_follow", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_uuid: x }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data.pesan == "follow") {
          set_button_follow("hidden");
          set_button_following("");
        } else {
          set_button_follow("");
          set_button_following("hidden");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_stats = (x) => {
    fetch("/api/get_stats", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_uuid: x }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        set_following(data.following);
        set_follower(data.follower);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div>
      <Header nama={nama} jumlah_post={feed.length} />
      <div className="h-screen overflow-y-auto">
        <Info
          pribadi={pribadi}
          other={other}
          following={following}
          follower={follower}
          nama={nama}
          username={username}
          bio={bio}
          button_following={button_following}
          button_follow={button_follow}
        />
        <Feed feed={feed} />
      </div>
    </div>
  );
}
