"use client";

export default function Footer(props) {
  const handleImageChange = props.handleImageChange;

  const input_gambar = () => {
    document.getElementById("input_gambar").click();
  };

  return (
    <div className="my-[20px] flex gap-x-[14px]">
      <input
        id="input_gambar"
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      <img
        onClick={input_gambar}
        src="/compose/image.svg"
        className="w-[20px] h-[20px]"
      />
      <img src="/compose/gif.svg" className="w-[20px] h-[20px]" />
      <img src="/compose/setting.svg" className="w-[20px] h-[20px]" />
      <img src="/compose/agenda.svg" className="w-[20px] h-[20px]" />
      <img src="/compose/location.svg" className="w-[20px] h-[20px]" />
    </div>
  );
}
