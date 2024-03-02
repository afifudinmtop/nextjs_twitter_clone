"use client";
import { useState } from "react";

import Sidemenu from "../components/sidemenu";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Page() {
  const [sidemenu, set_sidemenu] = useState("hidden");

  const view_sidemenu = () => {
    set_sidemenu("");
  };

  const hide_sidemenu = () => {
    set_sidemenu("hidden");
  };

  return (
    <div className="h-screen overflow-y-auto relative">
      <Sidemenu visibility={sidemenu} hide_sidemenu={hide_sidemenu} />
      <Header view_sidemenu={view_sidemenu} />
      <Footer />
    </div>
  );
}
