"use client";
import Header from "./components/header";
import List from "./components/list";
import Footer from "./components/footer";
import Search from "./components/search";
import dummy from "./dummy";

export default function Page() {
  return (
    <div className="h-screen overflow-y-auto relative">
      <Header />

      <div className="pt-[75px] px-[12px]">
        <Search />
      </div>
      <List dummy={dummy} />
      <Footer />
    </div>
  );
}
