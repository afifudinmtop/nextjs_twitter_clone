"use client";

export default function List(props) {
  const dm = (uuid) => {
    window.location.href = `/message/${uuid}`;
  };

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

  return (
    <div>
      {props.list_dm.map((item) => (
        <div
          key={item.uuid}
          onClick={() => {
            dm(item.uuid);
          }}
          className="border-b p-[15px] flex"
        >
          <img
            src={item.gambar}
            className="w-[38px] h-[38px] rounded-full me-[8px]"
          />

          <div className="w-full">
            {/* header */}
            <div className="flex justify-between">
              <div className="flex flex-wrap text-[14px] gap-x-2">
                <div className="font-bold text-[#000]">{item.nama}</div>
                <div className="text-[#536471]">{`@${item.username}`}</div>
                <div className="text-[#536471]">{timeAgo(item.ts)}</div>
              </div>

              <img src="/home/more.svg" className="w-[18px] h-[18px] my-auto" />
            </div>

            {/* message */}
            <div className="text-[14px] text-[#0f1419] leading-[19px]">
              {item.pesan}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
