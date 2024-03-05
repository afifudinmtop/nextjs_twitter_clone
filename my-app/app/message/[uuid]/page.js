"use client";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Chat from "./components/chat";
import Input from "./components/input";

export default function Page({ params }) {
  const uuid_user = params.uuid;
  const [data_chat, set_data_chat] = useState([]);
  const [username, set_username] = useState("");

  useEffect(() => {
    get_user();
    get_chat();
  }, []);

  const get_chat = () => {
    fetch("/api/dm/list_pesan/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: uuid_user }),
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
        set_data_chat(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_user = () => {
    fetch("/api/user/get_user2", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid_user }),
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
        set_username(data[0].username);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div>
      <Header username={username} />

      {/* chat */}
      <div className="pt-[65px]">
        {data_chat.map((item) => (
          <Chat item={item} />
        ))}
      </div>

      <Input />
    </div>
  );
}
