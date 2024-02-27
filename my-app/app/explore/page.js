"use client";

import Header from "./components/header";
import Trends from "./components/trends";
import dummy from "./dummy";

export default function Page() {
  return (
    <div>
      <Header />
      <Trends dummy={dummy} />
    </div>
  );
}
