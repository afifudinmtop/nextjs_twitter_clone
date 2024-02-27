"use client";

import Header from "./components/header";
import Trends from "./components/trends";
import Footer from "./components/footer";
import dummy from "./dummy";

export default function Page() {
  return (
    <div>
      <Header />
      <Trends dummy={dummy} />
      <Footer />
    </div>
  );
}
