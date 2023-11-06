import React from "react";
import { Header } from "../components";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const isNavMenuOpen = useSelector((state) => state.navMenu.isOpen);

  return (
    <div className={`${isNavMenuOpen ? "h-screen overflow-hidden" : ""} `}>
      <Header />
      {children}
    </div>
  );
}
