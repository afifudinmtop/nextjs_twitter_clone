"use client";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Form from "./components/form";
import Reply from "./components/reply";
import Footer from "./components/footer";

export default function page() {
  const [username, set_username] = useState("");
  const [nama, set_nama] = useState("");
  const [gambar, set_gambar] = useState("");
  const [caption, set_caption] = useState("");
  const [gambar_url, set_gambar_url] = useState("");

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
          set_username(data.user.username);
          set_nama(data.user.nama);
          set_gambar(data.user.gambar);
        } else {
          return (window.location.href = "/login/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const set_captionx = (x) => {
    set_caption(x);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const objectURL = URL.createObjectURL(file);
      set_gambar_url(objectURL);
    } else {
      set_gambar_url("");
    }
  };

  const upload_data = () => {
    const formData = new FormData();

    // Append movie data to the form data
    formData.append("caption", caption);

    // Get the file input element
    const fileInput = document.querySelector('input[type="file"]');

    // Check if a file is selected
    if (fileInput.files.length > 0) {
      // Append the selected file to the form data
      formData.append("gambar", fileInput.files[0]);
    } else {
      console.error("Please select an image file.");
      return;
    }

    fetch("/api/post/upload_gambar/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="px-[16px] overflow-y-auto h-screen">
      <Header upload_data={upload_data} />
      <Form set_captionx={set_captionx} gambar={gambar} />

      <img
        id="gambar"
        src={gambar_url}
        className="w-full rounded-[16px] mt-[11px]"
      />

      <Reply />
      <Footer handleImageChange={handleImageChange} />
    </div>
  );
}
