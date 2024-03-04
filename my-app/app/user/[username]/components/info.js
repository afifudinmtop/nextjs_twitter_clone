"use client";

export default function Info(props) {
  return (
    <div>
      <img src={props.banner} className="w-[full] h-[125px]" />

      {/* avatar */}
      <div className="flex justify-between pt-[12px] px-[16px] mb-[-30px]">
        <img
          src="/avatar.png"
          className="rounded-full w-[81px] h-[81px] translate-y-[-50px]"
        />

        {/* pribadi */}
        <div
          className={`text-[#0f1419] font-bold text-[15px] px-[16px] h-[34px] leading-[34px] rounded-full border-[#cfd9de] border-[0.8px] ${props.pribadi}`}
        >
          Edit profile
        </div>

        {/* other */}
        <div className={`${props.other}`}>
          {/* follow */}
          <div
            className={`text-white bg-[#0f1419] font-bold text-[15px] px-[16px] h-[34px] leading-[34px] rounded-full border-[#cfd9de] border-[0.8px] ${props.button_follow}`}
          >
            Follow
          </div>

          {/* Following */}
          <div
            className={`text-[#0f1419] font-bold text-[15px] px-[16px] h-[34px] leading-[34px] rounded-full border-[#cfd9de] border-[0.8px] ${props.button_following}`}
          >
            Following
          </div>
        </div>
      </div>

      {/* info */}
      <div className="px-[16px]">
        <div className="text-[#0f1419] font-extrabold text-[20px]">
          {props.nama}
        </div>
        <div className="text-[#536471] text-[15px]">@{props.username}</div>
        <div className="my-[12px]">{props.bio}</div>

        <div className="flex text-[14px] gap-x-[15px]">
          {/* Following */}
          <div>
            <span className="font-bold me-[3px]">{props.following}</span>
            <span>Following</span>
          </div>

          {/* Followers */}
          <div>
            <span className="font-bold me-[3px]">{props.follower}</span>
            <span>Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
