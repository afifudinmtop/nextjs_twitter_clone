"use client";
import { useState, useEffect } from "react";

import Sidemenu from "../components/sidemenu";
import Header from "./components/header";
import List from "./components/list";
import Footer from "./components/footer";
import Search from "./components/search";

export default function Page() {
  const [sidemenu, set_sidemenu] = useState("hidden");
  const [foto_profil, set_foto_profil] = useState("/avatar.png");

  const [list_dm, set_list_dm] = useState([]);
  const [list_dm_fix, set_list_dm_fix] = useState([]);

  useEffect(() => {
    get_list_dm();
  }, []);

  const view_sidemenu = () => {
    set_sidemenu("");
  };

  const hide_sidemenu = () => {
    set_sidemenu("hidden");
  };

  const set_foto_profilx = (x) => {
    set_foto_profil(x);
  };

  const get_list_dm = () => {
    fetch("/api/dm/list_dm/", {
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
        set_list_dm(data);
        set_list_dm_fix(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handle_set_terms = (x) => {
    let hasil = filterByKeyword(x);
    set_list_dm(hasil);
  };

  const filterByKeyword = (keyword) => {
    return list_dm_fix.filter((item) => {
      return (
        item.username.includes(keyword) ||
        item.nama.includes(keyword) ||
        item.pesan.includes(keyword)
      );
    });
  };

  return (
    <div className="h-screen overflow-y-auto relative">
      <Sidemenu
        visibility={sidemenu}
        hide_sidemenu={hide_sidemenu}
        set_foto_profilx={set_foto_profilx}
      />
      <Header view_sidemenu={view_sidemenu} foto_profil={foto_profil} />

      <div className="pt-[75px] px-[12px]">
        <Search handle_set_terms={handle_set_terms} />
      </div>

      <List list_dm={list_dm} />
      <Footer />
    </div>
  );
}
