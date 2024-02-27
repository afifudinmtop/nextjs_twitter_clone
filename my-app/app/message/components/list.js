"use client";

export default function List(props) {
  const dummy = props.dummy;
  return (
    <div className="">
      {dummy.map((dummy) => (
        <div key={dummy.uuid} className="border-b p-[15px] flex">
          <img
            src={`/dummy/${dummy.avatar}`}
            className="w-[38px] h-[38px] rounded-full me-[8px]"
          />

          <div>
            {/* header */}
            <div className="flex justify-between">
              <div className="flex flex-wrap text-[14px] gap-x-2">
                <div className="font-bold text-[#000]">{dummy.name}</div>
                <div className="text-[#536471]">{`@${dummy.username}`}</div>
                <div className="text-[#536471]">{dummy.ts}</div>
              </div>

              <img src="/home/more.svg" className="w-[18px] h-[18px] my-auto" />
            </div>

            {/* message */}
            <div className="text-[14px] text-[#0f1419] leading-[19px]">
              {dummy.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
