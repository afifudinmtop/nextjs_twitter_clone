"use client";
import { useState } from "react";

export default function Options(props) {
  let set_opsi = props.set_opsi;

  const selected = "text-[#0f1419] text-[15px] font-bold text-center p-[14px]";
  const not_selected =
    "text-[#536471] text-[15px] font-medium text-center p-[14px]";

  const [top, set_top] = useState("");
  const [latest, set_latest] = useState("invisible");
  const [people, set_people] = useState("invisible");
  const [media, set_media] = useState("invisible");
  const [lists, set_lists] = useState("invisible");

  const [top_text, set_top_text] = useState(selected);
  const [latest_text, set_latest_text] = useState(not_selected);
  const [people_text, set_people_text] = useState(not_selected);
  const [media_text, set_media_text] = useState(not_selected);
  const [lists_text, set_lists_text] = useState(not_selected);

  const pilih = (x) => {
    set_top("invisible");
    set_latest("invisible");
    set_people("invisible");
    set_media("invisible");
    set_lists("invisible");

    set_top_text(not_selected);
    set_latest_text(not_selected);
    set_people_text(not_selected);
    set_media_text(not_selected);
    set_lists_text(not_selected);

    if (x == "top") {
      set_top("");
      set_top_text(selected);
      set_opsi("top");
    }

    if (x == "latest") {
      set_latest("");
      set_latest_text(selected);
      set_opsi("latest");
    }

    if (x == "people") {
      set_people("");
      set_people_text(selected);
      set_opsi("people");
    }

    if (x == "media") {
      set_media("");
      set_media_text(selected);
      set_opsi("media");
    }

    if (x == "lists") {
      set_lists("");
      set_lists_text(selected);
      set_opsi("lists");
    }
  };

  return (
    <div className="flex justify-between px-1">
      {/* Top */}
      <div
        onClick={() => {
          pilih("top");
        }}
      >
        <div className={top_text}>Top</div>
        <div
          className={`bg-[#1d9bf0] w-full h-[4px] rounded-full ${top}`}
        ></div>
      </div>

      {/* Latest */}
      <div
        onClick={() => {
          pilih("latest");
        }}
      >
        <div className={latest_text}>Latest</div>
        <div
          className={`bg-[#1d9bf0] w-full h-[4px] rounded-full ${latest}`}
        ></div>
      </div>

      {/* People */}
      <div
        onClick={() => {
          pilih("people");
        }}
      >
        <div className={people_text}>People</div>
        <div
          className={`bg-[#1d9bf0] w-full h-[4px] rounded-full ${people}`}
        ></div>
      </div>

      {/* Media */}
      <div
        onClick={() => {
          pilih("media");
        }}
      >
        <div className={media_text}>Media</div>
        <div
          className={`bg-[#1d9bf0] w-full h-[4px] rounded-full ${media}`}
        ></div>
      </div>

      {/* Lists */}
      <div
        onClick={() => {
          pilih("lists");
        }}
      >
        <div className={lists_text}>Lists</div>
        <div
          className={`bg-[#1d9bf0] w-full h-[4px] rounded-full ${lists}`}
        ></div>
      </div>
    </div>
  );
}
