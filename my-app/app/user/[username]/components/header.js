"use client";

export default function Header(props) {
  return (
    <div className="flex px-[16px] py-[5px]">
      <img
        src="/search/back.svg"
        className="w-[20px] h-[20px] my-auto me-[35px]"
      />
      <div className="my-auto">
        <div className="text-[#0f1419] font-bold text-[17px]">{props.nama}</div>
        <div className="text-[13px] text-[#536471]">
          {props.jumlah_post} posts
        </div>
      </div>
    </div>
  );
}
