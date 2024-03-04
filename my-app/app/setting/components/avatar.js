"use client";

export default function Avatar(props) {
  const ganti_banner = () => {
    document.getElementById("input_banner").click();
  };

  const ganti_foto = () => {
    document.getElementById("input_avatar").click();
  };

  return (
    <div>
      {/* banner */}
      <div className="relative" onClick={ganti_banner}>
        {/* float */}
        <div className="absolute bg-[#0f1419bf] rounded-full p-[10px] z-[100] left-[50%] translate-x-[-50%] translate-y-[50px]">
          <img src="/setting/camera.svg" className="w-[22px] h-[22px]" />
        </div>

        {/* banner */}
        <img src={props.banner} className="w-full h-[125px]" />

        {/* input */}
        <input
          id="input_banner"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={props.handle_banner_change}
        />
      </div>

      {/* avatar */}
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

        {/* input */}
        <input
          id="input_avatar"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={props.handle_avatar_change}
        />
      </div>
    </div>
  );
}
