"use client";

export default function People(props) {
  let list = props.list;
  let visibility = props.visibility;

  return (
    <div className={`pt-[120px] pb-[50px] ${visibility}`}>
      {list.map((item) => (
        <div key={item.uuid} className="p-[15px] flex">
          <img
            src={`/dummy/${item.avatar}`}
            className="w-[38px] h-[38px] rounded-full me-[8px]"
          />

          <div>
            <div className="font-bold text-[#000] text-[14px]">{item.name}</div>

            <div className="text-[#536471] text-[14px]">{`@${item.username}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
