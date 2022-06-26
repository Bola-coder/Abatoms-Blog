import React from "react";
import Nav from "./Nav";

const Layouts = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layouts;
