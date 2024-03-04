"use client";

import { useState, useEffect } from "react";
import Header from "./components/header";
import Avatar from "./components/avatar";
import Form from "./components/form";

export default function Page() {
  const [nama, set_nama] = useState("");
  const [username, set_username] = useState("");
  const [bio, set_bio] = useState("");

  const [gambar, set_gambar] = useState("/avatar.png");
  const [banner, set_banner] = useState("/banner.png");

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
          get_user(data.user.username);
        } else {
          return (window.location.href = "/login/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const get_user = (x) => {
    fetch("/api/user/get_user", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: x }),
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
        set_bio(data[0].bio);
        set_nama(data[0].nama);
        set_gambar(data[0].gambar);
        set_banner(data[0].banner);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handle_nama = (x) => {
    set_nama(x);
  };

  const handle_bio = (x) => {
    set_bio(x);
  };

  const handle_avatar_change = (e) => {
    const file = e.target.files[0];

    if (file) {
      const objectURL = URL.createObjectURL(file);
      set_gambar(objectURL);
    } else {
      set_gambar("");
    }
  };

  const handle_banner_change = (e) => {
    const file = e.target.files[0];

    if (file) {
      const objectURL = URL.createObjectURL(file);
      set_banner(objectURL);
    } else {
      set_banner("");
    }
  };

  const upload_data = () => {
    const formData = new FormData();

    if (nama.length < 6) {
      return;
    }

    // Append movie data to the form data
    formData.append("nama", nama);
    formData.append("bio", bio);

    // Get the file input element
    const file_input_avatar = document.getElementById("input_avatar");
    const file_input_banner = document.getElementById("input_banner");

    // Check if a file is selected
    if (file_input_avatar.files.length > 0) {
      // Append the selected file to the form data
      formData.append("avatar", file_input_avatar.files[0]);
    }

    // Check if a file is selected
    if (file_input_banner.files.length > 0) {
      // Append the selected file to the form data
      formData.append("banner", file_input_banner.files[0]);
    }

    fetch("/api/user/update_profil", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        window.location.href = `/user/${username}`;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div>
      <Header username={username} upload_data={upload_data} />

      <div className="h-screen overflow-y-auto">
        <Avatar
          gambar={gambar}
          banner={banner}
          handle_avatar_change={handle_avatar_change}
          handle_banner_change={handle_banner_change}
        />
        <Form
          nama={nama}
          handle_nama={handle_nama}
          bio={bio}
          handle_bio={handle_bio}
        />
      </div>
    </div>
  );
}
