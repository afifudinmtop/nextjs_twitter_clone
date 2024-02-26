"use client";

export default function Form() {
  return (
    <div className="relative pt-[11px]">
      {/* field */}
      <div>
        {/* Nama */}
        <div className="mb-4">
          <label className="font-medium">Nama</label>
          <input
            type="text"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-600 shadow-sm rounded-lg"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="font-medium">Email</label>
          <input
            type="email"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-600 shadow-sm rounded-lg"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="font-medium">Username</label>
          <input
            type="text"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-600 shadow-sm rounded-lg"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="font-medium">Password</label>
          <input
            type="password"
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-600 shadow-sm rounded-lg"
          />
        </div>
      </div>

      {/* button register */}
      <div className="fixed translate-x-[-50%] mx-auto left-[50%] bottom-[23px] w-[80%] text-center bg-[#0f1419] text-white text-[16px] font-bold rounded-[9999px] py-[12px]">
        Next
      </div>
    </div>
  );
}
