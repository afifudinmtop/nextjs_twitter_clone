"use client";

export default function Avatar(props) {
  const ganti_banner = () => {
    console.log("ganti_banner");
  };

  const ganti_foto = () => {
    console.log("ganti_foto");
  };

  return (
    <div>
      <div className="relative" onClick={ganti_banner}>
        {/* float */}
        <div className="absolute bg-[#0f1419bf] rounded-full p-[10px] z-[100] left-[50%] translate-x-[-50%] translate-y-[50px]">
          <img src="/setting/camera.svg" className="w-[22px] h-[22px]" />
        </div>

        <img src={props.banner} className="w-full h-[125px]" />
      </div>

      <div className="relative" onClick={ganti_foto}>
        {/* float */}
        <div className="absolute bg-[#0f1419bf] rounded-full p-[10px] z-[100] translate-x-[35px] translate-y-[-15px]">
          <img src="/setting/camera.svg" className="w-[22px] h-[22px]" />
        </div>

        {/* avatar */}
        <div className="flex justify-between pt-[12px] px-[16px] mb-[-30px]">
          <img
            src={props.gambar}
            className="rounded-full w-[81px] h-[81px] translate-y-[-50px]"
          />
        </div>
      </div>
    </div>
  );
}
