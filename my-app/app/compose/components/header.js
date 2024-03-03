"use client";

export default function Header() {
  return (
    <div className="flex justify-between pt-[10px]">
      <div className="my-auto">
        <img src="/compose/back.svg" className="w-[20px] h-[20px] my-auto" />
      </div>

      <div className="flex my-auto">
        <div className="text-[#1d9bf0] font-bold text-[14px] my-auto">
          Drafts
        </div>
        <div className="bg-[#1d9bf0] text-white font-bold text-[14px] px-[16px] rounded-full py-[5px] my-auto ms-[24px]">
          Post
        </div>
      </div>
    </div>
  );
}
