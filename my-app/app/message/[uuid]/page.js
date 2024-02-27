"use client";
import Header from "./components/header";
import dummy from "./dummy";
import Chat from "./components/chat";
import Input from "./components/input";

export default function Page({ params }) {
  const uuid = params.uuid;

  return (
    <div>
      <Header />

      {/* chat */}
      <div className="pt-[65px]">
        {dummy.map((item) => (
          <Chat item={item} />
        ))}
      </div>

      <Input />
    </div>
  );
}
