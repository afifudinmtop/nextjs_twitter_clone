"use client";

export default function Sidemenu(props) {
  let visibility = props.visibility;
  let hide_sidemenu = props.hide_sidemenu;

  return (
    <div
      className={`${visibility} fixed top-0 left-[50%] translate-x-[-50%] h-screen w-screen lg:w-[375px] z-[100]`}
    >
      <div
        onClick={hide_sidemenu}
        className="bg-[#00000066] fixed top-0 left-0 h-screen w-screen lg:w-[375px] z-[100]"
      ></div>
      <div className="fixed top-0 left-0 h-screen w-[300px] lg:w-[300px] z-[200] bg-white"></div>
    </div>
  );
}
