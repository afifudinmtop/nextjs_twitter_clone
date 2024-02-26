"use client";

export default function Button() {
  return (
    <div>
      {/* Next */}
      <div className="bg-[#0f1419] rounded-[9999px] h-[36px] align-middle flex justify-center mb-[22px]">
        <div className="my-auto text-center text-white font-bold">Next</div>
      </div>

      {/* Forgot password? */}
      <div className="bg-white rounded-[9999px] h-[36px] align-middle flex justify-center mb-[22px] border">
        <div className="my-auto text-center text-[#0f1419] font-bold">
          Forgot password?
        </div>
      </div>
    </div>
  );
}
