"use client";

import Search from "./search";
import Options from "./options";

export default function Header(props) {
  let set_opsi = props.set_opsi;

  const back = () => {
    window.location.href = "/explore/";
  };

  return (
    <div className="fixed bg-white border-b top-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px]">
      <div className="flex justify-between px-[15px] pt-[15px] pb-[10px]">
        <img
          onClick={back}
          src="/search/back.svg"
          className="w-[20px] h-[20px] my-auto"
        />
        <Search />
        <img src="/search/more.svg" className="w-[20px] h-[20px] my-auto" />
      </div>

      <Options set_opsi={set_opsi} />
    </div>
  );
}
