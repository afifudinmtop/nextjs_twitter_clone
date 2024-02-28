"use client";

export default function Feed(props) {
  let list = props.list;
  let visibility = props.visibility;

  return (
    <div className={`pt-[120px] pb-[50px] ${visibility}`}>
      {list.map((item) => (
        <div key={item.uuid} className="border-b p-[15px] flex">
          <img
            src={`/dummy/${item.avatar}`}
            className="w-[38px] h-[38px] rounded-full me-[8px]"
          />

          <div>
            {/* header */}
            <div className="flex justify-between">
              <div className="flex flex-wrap text-[14px] gap-x-2">
                <div className="font-bold text-[#000]">{item.name}</div>
                <div className="text-[#536471]">{`@${item.username}`}</div>
                <div className="text-[#536471]">{item.ts}</div>
              </div>

              <img src="/home/more.svg" className="w-[18px] h-[18px] my-auto" />
            </div>

            {/* caption */}
            <div className="text-[14px] text-[#0f1419] leading-[19px]">
              {item.caption}
            </div>

            {item.image && (
              <img
                src={`/dummy/${item.image}`}
                className="w-full rounded-[16px] mt-[11px]"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
