import React, { children } from "react";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";

export default function Leyout({ children, addedItem, setAddedItem }) {
  return (
    <>
      <Header addedItem={addedItem} setAddedItem={setAddedItem} />
      {children}
      <Footer />
    </>
  );
}
