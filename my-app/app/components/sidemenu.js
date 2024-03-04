"use client";
import { useState, useEffect } from "react";

export default function Sidemenu(props) {
  let visibility = props.visibility;
  let hide_sidemenu = props.hide_sidemenu;

  const [username, set_username] = useState("");
  const [nama, set_nama] = useState("");
  const [gambar, set_gambar] = useState("");

  const [following, set_following] = useState("0");
  const [follower, set_follower] = useState("0");

  useEffect(() => {
    cek_login();
  }, []);

  const cek_login = () => {
    fetch("/api/auth/session", {
      method: "GET",
      cache: "no-store",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data?.user?.isLoggedIn) {
          set_username(data.user.username);
          set_nama(data.user.nama);
          set_gambar(data.user.gambar);
          get_stats(data.user.uuid);
        } else {
          return (window.location.href = "/login/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const logout = () => {
    window.location.href = "/api/auth/logout";
  };

  const profile = () => {
    window.location.href = `/user/${username}`;
  };

  const get_stats = (x) => {
    fetch("/api/get_stats", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_uuid: x }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        set_following(data.following);
        set_follower(data.follower);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const followingx = () => {
    window.location.href = `/following/${username}`;
  };

  const followerx = () => {
    window.location.href = `/follower/${username}`;
  };

  return (
    <div
      className={`${visibility} fixed top-0 left-[50%] translate-x-[-50%] h-screen w-screen lg:w-[375px] z-[100]`}
    >
      <div
        onClick={hide_sidemenu}
        className="bg-[#00000066] fixed top-0 left-0 h-screen w-screen lg:w-[375px] z-[100]"
      ></div>
      {/* main */}
      <div className="fixed top-0 left-0 h-screen w-[300px] lg:w-[300px] z-[200] bg-white">
        {/* header */}
        <div className="p-[16px]">
          <div className="flex justify-between mb-[8px]">
            {/* foto */}
            <img src={gambar} className="w-[40px] h-[40px] rounded-full" />

            {/* plus */}
            <div className="p-[6px] border rounded-full border-[#cfd9de] my-auto">
              <img src="/sidemenu/plus.svg" className="w-[18px] h-[18px]" />
            </div>
          </div>

          {/* name */}
          <div className="text-[17px] font-bold text-[#0f1419]">{nama}</div>

          {/* username */}
          <div className="text-[#536471] text-[15px]">@{username}</div>

          {/* stats */}
          <div className="flex mt-[12px] gap-[20px]">
            {/* Following */}
            <div onClick={followingx} className="flex">
              <div className="font-bold text-[#0f1419] my-auto me-1">
                {following}
              </div>
              <div className="text-[#536471] text-[14px] my-auto">
                Following
              </div>
            </div>

            {/* Followers */}
            <div onClick={followerx} className="flex">
              <div className="font-bold text-[#0f1419] my-auto me-1">
                {follower}
              </div>
              <div className="text-[#536471] text-[14px] my-auto">
                Followers
              </div>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div onClick={profile} className="flex p-[16px]">
          <img
            src="/sidemenu/profile.svg"
            className="w-[24px] h-[24px] me-[24px] my-auto"
          />
          <div className="text-[#0f1419] font-bold text-[20px] my-auto">
            Profile
          </div>
        </div>

        {/* Premium */}
        <div className="flex p-[16px]">
          <img
            src="/sidemenu/premium.svg"
            className="w-[24px] h-[24px] me-[24px] my-auto"
          />
          <div className="text-[#0f1419] font-bold text-[20px] my-auto">
            Premium
          </div>
        </div>

        {/* Lists */}
        <div className="flex p-[16px]">
          <img
            src="/sidemenu/lists.svg"
            className="w-[24px] h-[24px] me-[24px] my-auto"
          />
          <div className="text-[#0f1419] font-bold text-[20px] my-auto">
            Lists
          </div>
        </div>

        {/* Bookmarks */}
        <div className="flex p-[16px]">
          <img
            src="/sidemenu/bookmarks.svg"
            className="w-[24px] h-[24px] me-[24px] my-auto"
          />
          <div className="text-[#0f1419] font-bold text-[20px] my-auto">
            Bookmarks
          </div>
        </div>

        {/* Communities */}
        <div className="flex p-[16px]">
          <img
            src="/sidemenu/communities.svg"
            className="w-[24px] h-[24px] me-[24px] my-auto"
          />
          <div className="text-[#0f1419] font-bold text-[20px] my-auto">
            Communities
          </div>
        </div>

        {/* Monetization */}
        <div className="flex p-[16px]">
          <img
            src="/sidemenu/monetization.svg"
            className="w-[24px] h-[24px] me-[24px] my-auto"
          />
          <div className="text-[#0f1419] font-bold text-[20px] my-auto">
            Monetization
          </div>
        </div>

        {/* Ads */}
        <div className="flex p-[16px]">
          <img
            src="/sidemenu/ads.svg"
            className="w-[24px] h-[24px] me-[24px] my-auto"
          />
          <div className="text-[#0f1419] font-bold text-[20px] my-auto">
            Ads
          </div>
        </div>

        {/* Settings and privacy */}
        <div className="flex p-[16px]">
          <img
            src="/sidemenu/settings.svg"
            className="w-[24px] h-[24px] me-[24px] my-auto"
          />
          <div className="text-[#0f1419] font-bold text-[20px] my-auto">
            Settings and privacy
          </div>
        </div>

        {/* Log out */}
        <div onClick={logout} className="flex p-[16px]">
          <img
            src="/sidemenu/logout.svg"
            className="w-[24px] h-[24px] me-[24px] my-auto"
          />
          <div className="text-[#0f1419] font-bold text-[20px] my-auto">
            Log out
          </div>
        </div>
      </div>
    </div>
  );
}
