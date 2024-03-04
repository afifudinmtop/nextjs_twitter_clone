"use client";
import { useState, useEffect } from "react";

import Sidemenu from "../components/sidemenu";
import New from "../components/new";
import Header from "./components/header";
import Feed from "./components/feed";
import Footer from "./components/footer";

export default function Page() {
  const [sidemenu, set_sidemenu] = useState("hidden");
  const [feed, set_feed] = useState([]);
  const [foto_profil, set_foto_profil] = useState("/avatar.png");

  const view_sidemenu = () => {
    set_sidemenu("");
  };

  const hide_sidemenu = () => {
    set_sidemenu("hidden");
  };

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
          get_feed();
        } else {
          return (window.location.href = "/login/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_feed = () => {
    fetch("/api/post/feed", {
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
        set_feed(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
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
      <Feed feed={feed} />
      <Footer />
      <New />
    </div>
  );
}
