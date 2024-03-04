"use client";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import People from "./components/people";

export default function Page({ params }) {
  const username = params.username;

  const [nama, set_nama] = useState([]);
  const [list, set_list] = useState([]);

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
          get_user();
        } else {
          return (window.location.href = "/login/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_user = () => {
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
        set_nama(data[0].nama);
        get_list_follower(data[0].uuid);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_list_follower = (x) => {
    fetch("/api/follow/get_list_follower", {
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
        set_list(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="h-screen overflow-y-auto relative">
      <Header nama={nama} username={username} />
      <People list={list} />
      <Footer />
    </div>
  );
}
