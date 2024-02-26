"use client";

import Header from "./components/header";
import Form from "./components/form";

export default function Page() {
  return (
    <div className="h-screen overflow-y-auto">
      <Header />

      <div className="px-[30px]">
        <div className="text-[25px] font-bold text-[#0f1419] my-[19px]">
          Create your account
        </div>

        <Form />
      </div>
    </div>
  );
}
