"use client";

export default function Form(props) {
  const gambar = props.gambar;
  const set_captionx = props.set_captionx;

  return (
    <div className="flex mt-[30px]">
      <img src={gambar} className="w-[40px] h-[40px] rounded-full me-[8px]" />
      <textarea
        className="text-[20px] text-[#0f1419] h-[104px] overflow-y-auto w-full outline-none"
        placeholder="What is happening?!"
        onChange={(e) => set_captionx(e.target.value)}
      />
    </div>
  );
}
