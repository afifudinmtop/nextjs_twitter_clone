"use client";

export default function Reply() {
  return (
    <div className="py-[12px] flex w-full border-b border-[#eff3f4]">
      <img
        className="w-[16px] h-[16px] me-[4px] my-auto"
        src="/compose/globe.svg"
      />
      <div className="text-[#1d9bf0] my-auto font-bold text-[14px]">
        Everyone can reply
      </div>
    </div>
  );
}
