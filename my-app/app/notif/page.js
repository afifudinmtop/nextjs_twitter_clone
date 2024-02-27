"use client";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Page() {
  return (
    <div className="h-screen overflow-y-auto relative">
      <Header />
      <Footer />
    </div>
  );
}
