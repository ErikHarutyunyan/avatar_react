import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./Layout.styles";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
