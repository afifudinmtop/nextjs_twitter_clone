"use client";

export default function Header(props) {
  const home = () => {
    window.location.href = `/user/${props.username}`;
  };

  return (
    <div className="flex px-[16px] py-[10px]">
      <img
        onClick={home}
        src="/search/back.svg"
        className="w-[20px] h-[20px] my-auto me-[35px]"
      />
      <div className="my-auto flex justify-between w-full">
        <div className="text-[#0f1419] font-bold text-[17px] my-auto">
          Edit profile
        </div>

        <div
          className={`text-white bg-[#0f1419] font-bold text-[15px] px-[16px] h-[34px] leading-[34px] rounded-full border-[#cfd9de] border-[0.8px]`}
        >
          Save
        </div>
      </div>
    </div>
  );
}
