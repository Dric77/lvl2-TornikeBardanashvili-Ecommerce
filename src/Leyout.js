import React, { children } from "react";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";

export default function Leyout({
  children,
  addedItem,
  setAddedItem,
  productCount
}) {
  return (
    <>
      <Header
        addedItem={addedItem}
        setAddedItem={setAddedItem}
        productCount={productCount}
      />
      {children}
      <Footer />
    </>
  );
}
