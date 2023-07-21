import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography, colors, useColorScheme } from "@mui/material";

import CartWidget from "../CartWidget/CartWidget";
import {NavLink,useNavigate} from "react-router-dom";


const NavBar = () => {
    return (
    
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "2rem", color: "#ffffff" }} component= {NavLink} to = "/#/">Neoclothes</Typography>
          <Tabs textColor="inherit" value={1} indicatorColor="secondary" sx={{ paddingLeft: "5%" }}>
            <Tab label="Products" component= {NavLink} to = "/productsId">Products</Tab>
            <Tab label="Services" component= {NavLink} to = "/servicesId">Services</Tab>
            <Tab label="About" component= {NavLink} to = "/AboutId">About</Tab>
          </Tabs>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;