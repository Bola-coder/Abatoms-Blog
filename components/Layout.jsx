import React from "react";
import Nav from "./Nav";

const Layouts = ({ children }) => {
  return (
    <section className="bg-slate-900 text-white min-w-full min-h-screen p-2">
      {/* <Nav /> */}
      {children}
    </section>
  );
};

export default Layouts;
