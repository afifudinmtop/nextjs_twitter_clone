"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const masuk = () => {
    window.location.href = "/login/";
  };

  const register = () => {
    window.location.href = "/register/";
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
          return (window.location.href = "/home/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="h-screen p-[15px] overflow-y-auto">
      <div className="p-[19px]">
        {/* logo */}
        <img src="/landing/twitter.png" className="w-[42px] h-[53px]" />

        {/* tren */}
        <div className="text-[38px] text-[#0f1419] font-bold leading-[49px] my-[38px] tracking-[-0.8px]">
          Sedang tren
          <br />
          saat ini
        </div>

        {/* Bergabunglah sekarang. */}
        <div className="text-[#0f1419] text-[22px] font-bold mb-[19px]">
          Bergabunglah sekarang.
        </div>

        {/* Google */}
        <div className="flex justify-center px-[15px] border border-[#cfd9de] rounded-[9999px] h-[36px] mb-[8px]">
          <img
            src="/landing/google.png"
            className="w-[19px] h-[19px] me-[4px] my-auto"
          />
          <div className="text-[#0f1419] text-[14px] font-bold my-auto">
            Daftar dengan Google
          </div>
        </div>

        {/* Apple */}
        <div className="flex justify-center px-[15px] border border-[#cfd9de] rounded-[9999px] h-[36px]">
          <img
            src="/landing/apple.png"
            className="w-[19px] h-[19px] me-[4px] my-auto"
          />
          <div className="text-[#0f1419] text-[14px] font-bold my-auto">
            Daftar dengan Apple
          </div>
        </div>

        {/* atau */}
        <div className="text-center text-[14px] my-[8px]">atau</div>

        {/* buat akun */}
        <div
          onClick={register}
          className="bg-[#1d9bf0]  rounded-[9999px] h-[36px] align-middle flex justify-center mb-[8px]"
        >
          <div className="my-auto text-center text-white font-bold">
            Buat akun
          </div>
        </div>

        {/* syarat */}
        <div className="text-[10px] leading-[11px]">
          <span className="text-[#536471]">
            Dengan mendaftar, Anda menyetujui{" "}
          </span>
          <span className="text-[#1d9bf0]">Persyaratan Layanan</span>
          <span className="text-[#536471]"> dan </span>
          <span className="text-[#1d9bf0]">Kebijakan Privasi</span>
          <span className="text-[#536471]">, termasuk </span>
          <span className="text-[#1d9bf0]">Penggunaan Kuki</span>
          <span className="text-[#536471]">.</span>
        </div>

        {/* Sudah punya akun? */}
        <div className="mt-[38px] mb-[15px] text-[#0f1419] text-[16px] font-bold">
          Sudah punya akun?
        </div>

        {/* Masuk */}
        <div
          onClick={masuk}
          className="bg-white rounded-[9999px] h-[36px] align-middle flex justify-center mb-[8px] border-[#cfd9de] border"
        >
          <div className="my-auto text-center text-[#1d9bf0] font-bold">
            Masuk
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-y-1 gap-x-4 text-[12px] text-[#536471] justify-center mt-[20px]">
        <div>Tentang</div>
        <div>Unduh aplikasi X</div>
        <div>Pusat Bantuan</div>
        <div>Persyaratan Layanan</div>
        <div>Kebijakan Privasi</div>
        <div>Kebijakan Penggunaan Kuki</div>
        <div>Aksesibilitas</div>
        <div>Informasi iklan</div>
        <div>Blog</div>
        <div>Status</div>
        <div>Karier</div>
        <div>Sumber Daya Merek</div>
        <div>Periklanan</div>
        <div>Pemasaran</div>
        <div>X untuk Bisnis</div>
        <div>Pengembang</div>
        <div>Direktori</div>
        <div>Pengaturan</div>
        <div>© 2024 X Corp.</div>
      </div>
    </div>
  );
}
