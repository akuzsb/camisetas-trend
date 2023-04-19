import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavItem } from "./NavItem";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export const NavBarComponent = () => {


  return (
    <Navbar expand="md" variant="dark" bg="dark">
      <Link to="/" >
      <Navbar.Brand style={{margin: 6}}> Camisetas Trend</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav >
          <NavItem src="/category/futbol" label="Fútbol" />
          <NavItem src="/category/basquet" label="Básquet" />
          <NavItem src="/category/f1" label="Fórmula 1" />
        </Nav>
      <CartWidget   />
      </Navbar.Collapse>
      
    </Navbar>
  );
};
