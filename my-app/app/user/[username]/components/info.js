"use client";

export default function Info() {
  return (
    <div>
      <img src="/dummy/banner.png" className="w-[full] h-[125px]" />

      {/* avatar */}
      <div className="flex justify-between pt-[12px] px-[16px] mb-[-30px]">
        <img
          src="/avatar.png"
          className="rounded-full w-[81px] h-[81px] translate-y-[-50px]"
        />
        <div className="text-[#0f1419] font-bold text-[15px] px-[16px] h-[34px] leading-[34px] rounded-full border-[#cfd9de] border-[0.8px]">
          Edit profile
        </div>
      </div>

      {/* info */}
      <div className="px-[16px]">
        <div className="text-[#0f1419] font-extrabold text-[20px]">
          Afifudin Maarif
        </div>
        <div className="text-[#536471] text-[15px]">@afifudin_maarif</div>
        <div className="my-[12px]">INTP Slytherine</div>

        <div className="flex text-[14px] gap-x-[15px]">
          {/* Following */}
          <div>
            <span className="font-bold me-[3px]">8</span>
            <span>Following</span>
          </div>

          {/* Followers */}
          <div>
            <span className="font-bold me-[3px]">13</span>
            <span>Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
