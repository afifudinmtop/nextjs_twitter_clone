"use client";

export default function Input() {
  return (
    <div className="fixed border-t bottom-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px] flex justify-between px-[16px] py-[8px]">
      <div className="relative w-full">
        <img
          src="/message/send.svg"
          className="absolute top-0 bottom-0 w-[20px] h-[20px] my-auto text-gray-400 right-4"
        />

        <input
          type="text"
          placeholder="Start a new message"
          className="w-full text-[15px] bg-[#eff3f4] rounded-[16px] py-[8px] pr-12 pl-4 text-gray-500 border outline-none"
        />
      </div>
    </div>
  );
}
