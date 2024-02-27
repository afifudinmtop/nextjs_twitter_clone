"use client";

export default function Header() {
  return (
    <div className="fixed bg-white border-b top-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px] flex justify-between p-[15px]">
      <div className="flex">
        <img
          src="/home/avatar.jpg"
          className="w-[30px] h-[30px] rounded-full my-auto"
        />
        <div className="text-[17px] font-bold ms-[20px] my-auto">
          Notifications
        </div>
      </div>

      <img src="/home/setting.png" className="w-[19px] h-[19px] my-auto" />
    </div>
  );
}
