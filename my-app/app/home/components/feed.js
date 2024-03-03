"use client";

export default function Feed(props) {
  const feed = props.feed;

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
    <div className="pt-[60px] pb-[50px]">
      {feed.map((feed) => (
        <div key={feed.post_uuid} className="border-b p-[15px] flex">
          <img
            src={`/${feed.user_gambar}`}
            className="w-[38px] h-[38px] rounded-full me-[8px]"
          />

          <div className="w-full">
            {/* header */}
            <div className="flex justify-between w-full">
              <div className="flex flex-wrap text-[14px] gap-x-2">
                <div className="font-bold text-[#000]">{feed.user_nama}</div>
                <div className="text-[#536471]">{`@${feed.user_username}`}</div>
                <div className="text-[#536471]">{timeAgo(feed.post_ts)}</div>
              </div>

              <img src="/home/more.svg" className="w-[18px] h-[18px] my-auto" />
            </div>

            {/* caption */}
            <div className="text-[14px] text-[#0f1419] leading-[19px]">
              {feed.post_caption}
            </div>

            {feed.post_gambar && (
              <img
                src={`/uploads/${feed.post_gambar}`}
                className="w-full rounded-[16px] mt-[11px]"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
