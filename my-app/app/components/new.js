"use client";

export default function New() {
  const new_post = () => {
    window.location.href = "/compose";
  };

  return (
    <div
      onClick={new_post}
      className="bg-[#1d9bf0] rounded-full p-[16px] fixed translate-x-[300%] right-[50%] bottom-[10%]"
    >
      <img src="/home/new.svg" className="w-[24px] h-[24px]" />
    </div>
  );
}
