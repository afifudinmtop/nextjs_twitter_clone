"use client";

export default function Header(props) {
  const view_sidemenu = props.view_sidemenu;

  return (
    <div className="fixed bg-white border-b top-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px] flex justify-between p-[15px]">
      <img
        onClick={view_sidemenu}
        src="/home/avatar.jpg"
        className="w-[30px] h-[30px] rounded-full my-auto"
      />
      <img src="/home/x.png" className="w-[20px] h-[20px] my-auto" />
      <img src="/home/setting.png" className="w-[19px] h-[19px] my-auto" />
    </div>
  );
}
