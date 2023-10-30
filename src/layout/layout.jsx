import React from "react";
import { Header } from "../components";

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
