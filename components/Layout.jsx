import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <main className="dark:text-white dark:bg-zinc-900 h-full w-full">
      <div className="max-w-5xl mx-auto pb-5">
        <NavBar className="w-full" />
      </div>
      {children}
      <Footer />
    </main>
  );
}
