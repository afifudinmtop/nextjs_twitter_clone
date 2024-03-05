"use client";

export default function Header(props) {
  const back = () => {
    window.location.href = "/message/";
  };

  return (
    <div className="fixed bg-white border-b top-0 left-[50%] translate-x-[-50%] w-screen lg:w-[375px] flex justify-between p-[15px]">
      <div className="flex">
        <img
          onClick={back}
          src="/message/back.svg"
          className="w-[20px] h-[20px] rounded-full my-auto"
        />
        <div className="text-[17px] font-bold ms-[20px] my-auto">
          {props.username}
        </div>
      </div>

      <img src="/message/info.svg" className="w-[20px] h-[20px] my-auto" />
    </div>
  );
}
