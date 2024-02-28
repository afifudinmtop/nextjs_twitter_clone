"use client";
import { useState } from "react";

import Header from "./components/header";
import Feed from "./components/feed";
import Footer from "./components/footer";
import dummy from "./dummy";
import dummy_people from "./dummy_people";
import People from "./components/people";

export default function Page() {
  const [feed, set_feed] = useState("");
  const [people, set_people] = useState("hidden");

  const set_opsi = (x) => {
    set_feed("hidden");
    set_people("hidden");

    // top
    if (x == "top" || x == "latest") {
      set_feed("");
    }

    // people
    if (x == "people") {
      set_people("");
    }
  };

  return (
    <div className="h-screen overflow-y-auto relative">
      <Header set_opsi={set_opsi} />
      <Feed list={dummy} visibility={feed} />
      <People list={dummy_people} visibility={people} />
      <Footer />
    </div>
  );
}
