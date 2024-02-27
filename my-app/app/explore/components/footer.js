"use client";

export default function Footer() {
  const home = () => {
    window.location.href = "/home/";
  };

  const explore = () => {
    window.location.href = "/explore/";
  };

  const notif = () => {
    window.location.href = "/notif/";
  };

  const message = () => {
    window.location.href = "/message/";
  };

  return (
    <div className="fixed bg-white border-t bottom-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px] flex justify-between px-[30px] py-[15px]">
      {/* home */}
      <img
        onClick={home}
        src="/footer/home.svg"
        className="w-[25px] h-[25px]"
      />

      {/* explore */}
      <img
        onClick={explore}
        src="/footer/search_bold.svg"
        className="w-[25px] h-[25px]"
      />

      {/* notif */}
      <img
        onClick={notif}
        src="/footer/notif.svg"
        className="w-[25px] h-[25px]"
      />

      {/* message */}
      <img
        onClick={message}
        src="/footer/message.svg"
        className="w-[25px] h-[25px]"
      />
    </div>
  );
}
