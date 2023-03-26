import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavItem } from "./NavItem";
import { CartWidget } from "./CartWidget";

export const NavBarComponent = () => {


  return (
    <Navbar expand="md" variant="dark" bg="dark">
      <Navbar.Brand href="/" style={{margin: 6}}> Camisetas Trend</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav >
          <NavItem src="/nuevas" label="Recién llegadas" />
          <NavItem src="/futbol" label="Fútbol" />
          <NavItem src="/basquet" label="Básquet" />
          <NavItem src="/rugby" label="Rugby" />
          <NavItem src="/f1" label="Fórmula 1" />
        </Nav>
      <CartWidget countCart="2" />
      </Navbar.Collapse>
      
    </Navbar>
  );
};
