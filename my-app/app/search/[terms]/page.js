"use client";
import { useState, useEffect } from "react";

import Header from "./components/header";
import Feed from "./components/feed";
import Footer from "./components/footer";
import People from "./components/people";

export default function Page({ params }) {
  let searchTimeout;

  const [terms, set_terms] = useState(params.terms);
  const [feed, set_feed] = useState("");
  const [people, set_people] = useState("hidden");

  const [data_feed, set_data_feed] = useState([]);
  const [data_people, set_data_people] = useState([]);

  useEffect(() => {
    search_user(terms);
    search_post(terms);
  }, []);

  const set_opsi = (x) => {
    set_feed("hidden");
    set_people("hidden");

    // top
    if (x == "latest") {
      set_feed("");
    }

    // people
    if (x == "people") {
      set_people("");
    }
  };

  const hadle_set_terms = (x) => {
    set_terms(x);

    clearTimeout(searchTimeout); // Hapus timeout yang ada jika ada

    searchTimeout = setTimeout(() => {
      // Jalankan fungsi search setelah 1 detik
      search_user(x);
      search_post(x);
    }, 1000); // Tunggu 1 detik sebelum menjalankan pencarian
  };

  const search_user = (x) => {
    if (x.length < 1) {
      return;
    }

    fetch("/api/user/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ terms: x }),
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
        set_data_people(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const search_post = (x) => {
    if (x.length < 1) {
      return;
    }

    fetch("/api/post/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ terms: x }),
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
        set_data_feed(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="h-screen overflow-y-auto relative">
      <Header
        set_opsi={set_opsi}
        terms={terms}
        hadle_set_terms={hadle_set_terms}
      />
      <Feed list={data_feed} visibility={feed} />
      <People list={data_people} visibility={people} />
      <Footer />
    </div>
  );
}
