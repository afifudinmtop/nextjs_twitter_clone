"use client";

export default function Header() {
  const back = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex justify-between px-[15px]">
      <img
        onClick={back}
        src="/register/x.png"
        className="w-[24px] h-[24px] my-auto"
      />
      <img src="/register/logo.png" className="w-[30px] h-[50px] my-auto" />
      <div></div>
    </div>
  );
}
