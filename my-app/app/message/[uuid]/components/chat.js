"use client";

export default function Chat(props) {
  const item = props.item;

  if (item.me == "yes") {
    return (
      <div className="flex justify-end px-[16px]">
        <div className="w-[80%] pb-[24px]">
          <div
            key={item.uuid}
            className="text-white bg-[#1d9bf0] text-[15px] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[4px]  px-[16px] py-[12px]"
          >
            {item.text}
          </div>

          <div className="text-end text-[13px] text-[#536471] mt-[6px]">
            {item.ts}
          </div>
        </div>
      </div>
    );
  }

  if (item.me == "no") {
    return (
      <div className="flex justify-start px-[16px]">
        <div className="w-[80%] pb-[24px]">
          <div
            key={item.uuid}
            className="text-[#0f1419] bg-[#eff3f4] text-[15px] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[4px] rounded-br-[24px]  px-[16px] py-[12px]"
          >
            {item.text}
          </div>

          <div className="text-start text-[13px] text-[#536471] mt-[6px]">
            {item.ts}
          </div>
        </div>
      </div>
    );
  }
}
