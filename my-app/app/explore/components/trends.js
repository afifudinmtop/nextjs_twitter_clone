"use client";

export default function Trends(props) {
  const dummy = props.dummy;

  const cari = (x) => {
    window.location.href = `/search/${x}`;
  };

  return (
    <div className="pt-[75px] px-[16px]">
      <div className="text-[20px] font-extrabold text-[#0f1419]">
        Indonesia trends
      </div>

      {dummy.map((dummy, index) => (
        <div
          key={dummy.uuid}
          onClick={() => {
            cari(dummy.trend);
          }}
          className="py-[12px]"
        >
          {/* header */}
          <div className="flex justify-between">
            {/* number */}
            <div className="flex gap-2 text-[#536471] text-[13px]">
              <div>{index + 1}</div>
              <div>Trending</div>
            </div>

            {/* more */}
            <img src="/search/more.svg" className="w-[19px] h-[19px] my-auto" />
          </div>

          {/* trend */}
          <div className="text-[15px] text-[#0f1419] font-bold">
            {dummy.trend}
          </div>

          {/* count */}
          <div className="text-[#536471] text-[13px]">{dummy.count}</div>
        </div>
      ))}
    </div>
  );
}
