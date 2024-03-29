"use client";

import Search from "./search";

export default function Header(props) {
  const view_sidemenu = props.view_sidemenu;

  return (
    <div className="fixed bg-white border-b top-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px] flex justify-between p-[15px]">
      <img
        onClick={view_sidemenu}
        src={props.foto_profil}
        className="w-[30px] h-[30px] rounded-full my-auto"
      />
      <Search />
      <img src="/home/setting.png" className="w-[19px] h-[19px] my-auto" />
    </div>
  );
}
