"use client";
import { useState, useEffect } from "react";

import Button from "./button";

export default function Form() {
  const [username, set_username] = useState("");
  const [password, set_password] = useState("");
  const [notif, set_notif] = useState("");

  useEffect(() => {
    cek_login();
  }, []);

  const cek_login = () => {
    fetch("/api/auth/session_check", {
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
        if (data.isLoggedIn) {
          return (window.location.href = "/home/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const upload_data = () => {
    if (username.length < 6) {
      return set_notif("username min 6 character!");
    }

    if (password.length < 6) {
      return set_notif("password min 6 character!");
    }

    fetch("/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
        if (data.pesan == "sukses!") {
          return (window.location.href = "/home");
        }

        set_notif(data.pesan);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div>
      <div className="relative">
        {/* notif */}
        <div className="text-center text-red-600 font-medium text-base">
          {notif}
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="font-medium">Username</label>
          <input
            onChange={(e) => set_username(e.target.value)}
            type="text"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-600 shadow-sm rounded-lg"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="font-medium">Password</label>
          <input
            onChange={(e) => set_password(e.target.value)}
            type="password"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-600 shadow-sm rounded-lg"
          />
        </div>
      </div>

      <Button upload_data={upload_data} />
    </div>
  );
}
