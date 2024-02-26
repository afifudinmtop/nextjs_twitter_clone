"use client";
import Header from "./components/header";
import Feed from "./components/feed";
import Footer from "./components/footer";
import dummy from "./dummy";

export default function Page() {
  return (
    <div className="h-screen overflow-y-auto relative">
      <Header />
      <Feed dummy={dummy} />
      <Footer />
    </div>
  );
}
