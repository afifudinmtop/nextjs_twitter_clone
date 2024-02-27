"use client";

import Header from "./components/header";
import Sosmed from "./components/sosmed";
import Button from "./components/button";
import Form from "./components/form";

export default function Page() {
  const register = () => {
    window.location.href = "/register/";
  };

  return (
    <div className="h-screen overflow-y-auto relative">
      <Header />

      <div className="px-[30px] fixed top-[50%] translate-y-[-50%] w-screen lg:w-[375px]">
        <div className="text-[25px] font-bold text-[#0f1419] my-[19px]">
          Sign in to X
        </div>

        <Sosmed />

        {/* atau */}
        <div className="text-center text-[14px] my-[22px]">atau</div>

        <Form />

        <Button />

        {/* sign up */}
        <div className="mt-[38px] text-[14px]">
          <span className="text-[#536471]">Don't have an account? </span>
          <span onClick={register} className="text-[#1d9bf0]">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}
