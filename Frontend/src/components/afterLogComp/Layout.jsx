import React from "react";
import { Outlet } from "react-router-dom";
import NavbarA from "./NavbarA";
import FooterA from "./FooterA";
export const Layout = () => {
  return (
    <>
      <NavbarA />
      <Outlet />
      <FooterA />
    </>
  );
};
