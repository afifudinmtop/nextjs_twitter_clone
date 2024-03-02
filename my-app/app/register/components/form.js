"use client";
import { useState, useEffect } from "react";

export default function Form() {
  const [nama, set_nama] = useState("");
  const [email, set_email] = useState("");
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
    if (nama.length < 2) {
      return set_notif("name min 2 character!");
    }

    if (email.length < 6) {
      return set_notif("email min 6 character!");
    }

    if (username.length < 6) {
      return set_notif("username min 6 character!");
    }

    if (password.length < 6) {
      return set_notif("password min 6 character!");
    }

    fetch("/api/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nama, email, username, password }),
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
          return (window.location.href = "/login");
        }

        set_notif(data.pesan);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="relative pt-[11px]">
      {/* notif */}
      <div className="text-center text-red-600 font-medium text-base">
        {notif}
      </div>

      {/* field */}
      <div>
        {/* Nama */}
        <div className="mb-4">
          <label className="font-medium">Nama</label>
          <input
            onChange={(e) => set_nama(e.target.value)}
            type="text"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-600 shadow-sm rounded-lg"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="font-medium">Email</label>
          <input
            onChange={(e) => set_email(e.target.value)}
            type="email"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-600 shadow-sm rounded-lg"
          />
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

      {/* button register */}
      <div className="fixed bottom-[23px] left-[50%] translate-x-[-50%] w-screen lg:w-[375px]">
        <div
          onClick={upload_data}
          className="w-[80%] mx-auto text-center bg-[#0f1419] text-white text-[16px] font-bold rounded-[9999px] py-[12px]"
        >
          Next
        </div>
      </div>
    </div>
  );
}
