"use client";
import { useState } from "react";

export default function Input(props) {
  const [chat, set_chat] = useState("");

  const hadle_set_chat = (x) => {
    set_chat(x);
  };

  const send_chat = () => {
    fetch("/api/dm/send_pesan/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid_penerima: props.uuid_user, pesan: chat }),
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
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="fixed border-t bottom-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px] flex justify-between px-[16px] py-[8px]">
      <div className="relative w-full">
        <img
          onClick={send_chat}
          src="/message/send.svg"
          className="absolute top-0 bottom-0 w-[20px] h-[20px] my-auto text-gray-400 right-4"
        />

        <input
          onChange={(e) => hadle_set_chat(e.target.value)}
          type="text"
          placeholder="Start a new message"
          className="w-full text-[15px] bg-[#eff3f4] rounded-[16px] py-[8px] pr-12 pl-4 text-gray-500 border outline-none"
        />
      </div>
    </div>
  );
}
