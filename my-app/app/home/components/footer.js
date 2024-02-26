"use client";

export default function Footer() {
  return (
    <div className="fixed bg-white border-t bottom-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px] flex justify-between px-[30px] py-[15px]">
      <img src="/footer/home_bold.svg" className="w-[25px] h-[25px]" />
      <img src="/footer/search.svg" className="w-[25px] h-[25px]" />
      <img src="/footer/notif.svg" className="w-[25px] h-[25px]" />
      <img src="/footer/message.svg" className="w-[25px] h-[25px]" />
    </div>
  );
}
