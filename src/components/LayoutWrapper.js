"use client";

import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

export default function LayoutWrapper({ children }) {
  return (
    <>
      <Header />
      <Toaster />
      <main>{children}</main>
      <Footer />
    </>
  );
}
