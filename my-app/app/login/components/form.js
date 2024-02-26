"use client";

export default function Form() {
  return (
    <div className="relative">
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
  );
}
