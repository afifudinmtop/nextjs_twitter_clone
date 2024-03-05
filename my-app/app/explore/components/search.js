"use client";
import { useState } from "react";

export default function Search() {
  const [terms, set_terms] = useState("");

  const searchx = () => {
    if (terms.length > 0) {
      window.location.href = `/search/${terms}`;
    }
  };

  return (
    <div className="relative">
      <img
        onClick={searchx}
        src="/search/search.svg"
        className="absolute top-0 bottom-0 w-[16px] h-[16px] my-auto text-gray-400 left-4"
      />

      <input
        onChange={(e) => set_terms(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-full text-[15px] rounded-full py-[4px] pl-12 pr-4 text-gray-500 border outline-none bg-gray-50 focus:bg-white focus:border-sky-600"
      />
    </div>
  );
}
