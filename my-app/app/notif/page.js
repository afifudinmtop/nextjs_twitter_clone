"use client";
import { useState } from "react";

import Sidemenu from "../components/sidemenu";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Page() {
  const [sidemenu, set_sidemenu] = useState("hidden");
  const [foto_profil, set_foto_profil] = useState("/avatar.png");

  const view_sidemenu = () => {
    set_sidemenu("");
  };

  const hide_sidemenu = () => {
    set_sidemenu("hidden");
  };

  const set_foto_profilx = (x) => {
    set_foto_profil(x);
  };

  return (
    <div className="h-screen overflow-y-auto relative">
      <Sidemenu
        visibility={sidemenu}
        hide_sidemenu={hide_sidemenu}
        set_foto_profilx={set_foto_profilx}
      />
      <Header view_sidemenu={view_sidemenu} foto_profil={foto_profil} />
      <Footer />
    </div>
  );
}
