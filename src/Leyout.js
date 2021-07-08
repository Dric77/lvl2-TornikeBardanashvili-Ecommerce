import React, { children } from "react";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";

export default function Leyout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
