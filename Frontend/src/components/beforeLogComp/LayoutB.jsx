import React from "react";
import { Outlet } from "react-router-dom";
import NavbarB from "./NavbarB";
import { Provider } from "react-redux";
import store from "../../app/store";
import FooterB from "./FooterB";
const LayoutB = () => {
    return (
      <>
        <Provider store={store}>
          <NavbarB />
          <Outlet />
          <FooterB />
        </Provider>
      </>
    );
}

export default LayoutB;
