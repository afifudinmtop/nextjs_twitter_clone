"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Feed from "./components/feed";
import Info from "./components/info";

export default function Page({ params }) {
  const username = params.username;
  const [feed, set_feed] = useState([]);
  const [nama, set_nama] = useState("Afifudin Maarif");

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
          get_feed();
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

  return (
    <div>
      <Header nama={nama} jumlah_post="7" />
      <div className="h-screen overflow-y-auto">
        <Info />
        <Feed feed={feed} />
      </div>
    </div>
  );
}
