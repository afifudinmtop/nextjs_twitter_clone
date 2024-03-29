"use client";

export default function Feed(props) {
  let list = props.list;
  let visibility = props.visibility;

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

  const user_profil = (x) => {
    window.location.href = `/user/${x}`;
  };

  return (
    <div className={`pt-[120px] pb-[50px] ${visibility}`}>
      {list.map((item) => (
        <div key={item.post_uuid} className="border-b p-[15px] flex">
          <img
            onClick={() => {
              user_profil(item.user_username);
            }}
            src={item.user_gambar}
            className="w-[38px] h-[38px] rounded-full me-[8px]"
          />

          <div className="w-full">
            {/* header */}
            <div
              onClick={() => {
                user_profil(item.user_username);
              }}
              className="flex justify-between w-full"
            >
              <div className="flex flex-wrap text-[14px] gap-x-2 w-full">
                <div className="font-bold text-[#000]">{item.user_nama}</div>
                <div className="text-[#536471]">{`@${item.user_username}`}</div>
                <div className="text-[#536471]">{timeAgo(item.post_ts)}</div>
              </div>

              <img src="/home/more.svg" className="w-[18px] h-[18px] my-auto" />
            </div>

            {/* caption */}
            <div className="text-[14px] text-[#0f1419] leading-[19px]">
              {item.post_caption}
            </div>

            {item.post_gambar && (
              <img
                src={`/uploads/${item.post_gambar}`}
                className="w-full rounded-[16px] mt-[11px]"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
