"use client";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Form from "./components/form";
import Reply from "./components/reply";
import Footer from "./components/footer";

export default function page() {
  const [username, set_username] = useState("");
  const [nama, set_nama] = useState("");
  const [gambar, set_gambar] = useState("");
  const [caption, set_caption] = useState("");

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
          set_nama(data.user.nama);
          set_gambar(data.user.gambar);
        } else {
          return (window.location.href = "/login/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const set_captionx = (x) => {
    set_caption(x);
  };

  return (
    <div className="px-[16px]">
      <Header />
      <Form set_captionx={set_captionx} gambar={gambar} />
      <Reply />
      <Footer />
    </div>
  );
}
