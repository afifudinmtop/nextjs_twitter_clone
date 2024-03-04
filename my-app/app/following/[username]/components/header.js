"use client";

import Options from "./options";

export default function Header(props) {
  const home = () => {
    window.location.href = "/home/";
  };

  return (
    <div className="fixed bg-white border-b top-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px]">
      <div className="flex px-[16px] py-[5px]">
        <img
          onClick={home}
          src="/search/back.svg"
          className="w-[20px] h-[20px] my-auto me-[35px]"
        />
        <div className="my-auto">
          <div className="text-[#0f1419] font-bold text-[17px]">
            {props.nama}
          </div>
          <div className="text-[13px] text-[#536471]">@{props.username}</div>
        </div>
      </div>

      <Options username={props.username} />
    </div>
  );
}
