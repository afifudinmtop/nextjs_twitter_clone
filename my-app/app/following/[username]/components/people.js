"use client";

export default function People(props) {
  return (
    <div className={`pt-[120px] pb-[50px]`}>
      {props.list.map((item) => (
        <div key={item.uuid} className="p-[15px] flex">
          <img
            src={`${item.gambar}`}
            className="w-[38px] h-[38px] rounded-full me-[8px]"
          />

          <div>
            <div className="font-bold text-[#000] text-[14px]">{item.nama}</div>

            <div className="text-[#536471] text-[14px]">@{item.username}</div>
            <div className="text-[#0f1419] text-[14px] pt-[4px]">
              {item.bio}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
