"use client";

export default function Options(props) {
  const selected = "text-[#0f1419] text-[15px] font-bold text-center p-[14px]";
  const not_selected =
    "text-[#536471] text-[15px] font-medium text-center p-[14px]";

  const following = () => {
    window.location.href = `/following/${props.username}`;
  };

  return (
    <div className="flex px-1">
      {/* Following */}
      <div onClick={following}>
        <div className={`${not_selected}`}>Following</div>
        <div
          className={`bg-[#1d9bf0] w-full h-[4px] rounded-full hidden`}
        ></div>
      </div>

      {/* Followers */}
      <div>
        <div className={`${selected}`}>Followers</div>
        <div className={`bg-[#1d9bf0] w-full h-[4px] rounded-full`}></div>
      </div>
    </div>
  );
}
