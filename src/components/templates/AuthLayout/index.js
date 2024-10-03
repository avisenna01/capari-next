import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
};

export default AuthLayout;
