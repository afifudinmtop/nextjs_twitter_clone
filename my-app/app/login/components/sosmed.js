"use client";

export default function Sosmed() {
  return (
    <div>
      {/* Google */}
      <div className="flex justify-center px-[15px] border border-[#cfd9de] rounded-[9999px] h-[36px] mb-[22px]">
        <img
          src="/landing/google.png"
          className="w-[19px] h-[19px] me-[4px] my-auto"
        />
        <div className="text-[#0f1419] text-[14px] font-bold my-auto">
          Daftar dengan Google
        </div>
      </div>

      {/* Apple */}
      <div className="flex justify-center px-[15px] border border-[#cfd9de] rounded-[9999px] h-[36px] mb-[22px]">
        <img
          src="/landing/apple.png"
          className="w-[19px] h-[19px] me-[4px] my-auto"
        />
        <div className="text-[#0f1419] text-[14px] font-bold my-auto">
          Daftar dengan Apple
        </div>
      </div>
    </div>
  );
}
