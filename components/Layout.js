import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <main className="dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto pb-5">
        <NavBar className="w-full" />
      </div>
      {children}
    </main>
  );
}
