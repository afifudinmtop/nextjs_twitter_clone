"use client";

import Search from "./search";

export default function Header() {
  return (
    <div className="fixed bg-white border-b top-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px] flex justify-between p-[15px]">
      <img
        src="/home/avatar.jpg"
        className="w-[30px] h-[30px] rounded-full my-auto"
      />
      <Search />
      <img src="/home/setting.png" className="w-[19px] h-[19px] my-auto" />
    </div>
  );
}
