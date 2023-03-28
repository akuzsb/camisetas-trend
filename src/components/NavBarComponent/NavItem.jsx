import React from "react";
import { Link } from "react-router-dom";



export const NavItem = ({ label, src }) => {
  const styles = {
    margin: 4,
    textDecoration: "none",
    color: "grey",
  };
  return (
    
    <Link style={styles} to={src}>
      {label}
    </Link>
  );
};
