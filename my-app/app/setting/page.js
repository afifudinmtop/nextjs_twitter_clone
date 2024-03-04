"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Avatar from "./components/avatar";
import Form from "./components/form";

export default function Page() {
  const [nama, set_nama] = useState("");
  const [username, set_username] = useState("");
  const [bio, set_bio] = useState("");

  const [gambar, set_gambar] = useState("/avatar.png");
  const [banner, set_banner] = useState("/banner.png");

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
          set_username(data.user.username);
          get_user(data.user.username);
        } else {
          return (window.location.href = "/login/");
        }
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
      body: JSON.stringify({ username: x }),
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
        set_banner(data[0].banner);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handle_nama = (x) => {
    set_nama(x);
  };

  const handle_bio = (x) => {
    set_bio(x);
  };

  const handle_username = (x) => {
    set_username(x);
  };

  return (
    <div>
      <Header username={username} />

      <div className="h-screen overflow-y-auto">
        <Avatar gambar={gambar} banner={banner} />
        <Form
          nama={nama}
          handle_nama={handle_nama}
          bio={bio}
          handle_bio={handle_bio}
        />
      </div>
    </div>
  );
}
