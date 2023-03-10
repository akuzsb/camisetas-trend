import React from "react";
import { Nav } from "react-bootstrap";



export const NavItem = ({ label, src }) => {
  const styles = {
    margin: 4,
    textDecoration: "none",
  };
  return (
    <Nav.Link style={styles} href={src}>
      {label}
    </Nav.Link>
  );
};
