"use client";

export default function Chat(props) {
  const item = props.item;

  const timeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const elapsed = now - past;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " s";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " m";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " h";
    } else if (elapsed < msPerDay * 7) {
      return Math.round(elapsed / msPerDay) + " d";
    } else {
      return (
        past.getDate() +
        " " +
        past.toLocaleString("default", { month: "long" }) +
        " " +
        past.getFullYear()
      );
    }
  };

  if (item.mine == "yes") {
    return (
      <div className="flex justify-end px-[16px]">
        <div className="w-[80%] pb-[24px]">
          <div
            key={item.uuid_pesan}
            className="text-white bg-[#1d9bf0] text-[15px] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[4px]  px-[16px] py-[12px]"
          >
            {item.pesan}
          </div>

          <div className="text-end text-[13px] text-[#536471] mt-[6px]">
            {timeAgo(item.ts)}
          </div>
        </div>
      </div>
    );
  }

  if (item.mine == "no") {
    return (
      <div className="flex justify-start px-[16px]">
        <div className="w-[80%] pb-[24px]">
          <div
            key={item.uuid_pesan}
            className="text-[#0f1419] bg-[#eff3f4] text-[15px] rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[4px] rounded-br-[24px]  px-[16px] py-[12px]"
          >
            {item.pesan}
          </div>

          <div className="text-start text-[13px] text-[#536471] mt-[6px]">
            {timeAgo(item.ts)}
          </div>
        </div>
      </div>
    );
  }
}
