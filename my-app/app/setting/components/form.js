"use client";

export default function Form(props) {
  return (
    <div className="px-[16px]">
      {/* name */}
      <div className="border p-[8px]">
        <div className="text-[#536471] text-[13px]">Name</div>
        <input
          value={props.nama}
          className="w-full outline-0 text-[17px] text-[#0f1419]"
          onChange={(e) => props.handle_nama(e.target.value)}
        />
      </div>

      {/* bio */}
      <div className="border p-[8px] mt-[24px]">
        <div className="text-[#536471] text-[13px]">Bio</div>
        <textarea
          value={props.bio}
          className="w-full outline-0 text-[17px] text-[#0f1419]"
          onChange={(e) => props.handle_bio(e.target.value)}
          rows={3}
        />
      </div>
    </div>
  );
}
