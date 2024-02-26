"use client";

export default function Feed(props) {
  const dummy = props.dummy;
  return (
    <div className="pt-[60px]">
      {dummy.map((dummy) => (
        <div key={dummy.uuid} className="border-b p-[15px] flex">
          <img
            src={`/dummy/${dummy.avatar}`}
            className="w-[38px] h-[38px] rounded-full me-[8px]"
          />

          <div>
            {/* header */}
            <div className="flex justify-between">
              <div className="flex text-[14px] gap-2">
                <div className="font-bold text-[#000]">{dummy.name}</div>
                <div className="text-[#536471]">{`@${dummy.username}`}</div>
                <div className="text-[#536471]">{dummy.ts}</div>
              </div>

              <img src="/home/more.svg" className="w-[18px] h-[18px] my-auto" />
            </div>

            {/* caption */}
            <div className="text-[14px] text-[#0f1419] leading-[19px]">
              {dummy.caption}
            </div>

            {dummy.image && (
              <img
                src={`/dummy/${dummy.image}`}
                className="w-full rounded-[16px] mt-[11px]"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
