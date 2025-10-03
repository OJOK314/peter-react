import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import "./Navigations.css"
import { Link } from "react-router-dom";
import image from "../assets/image.jpg";


function Navigations() {
  return (
    <Navbar
      fluid
      rounded
       className="bg-blue-900 text-white px-8 py-2 sticky top-0 z-50  hover:text-yellow-500 hover:bg-red-600 transition-colors duration-300"
     
    >
      {/* NavbarBrand with React Router Link */}
      <NavbarBrand
        as={Link}
        to="/"
        style={{ display: "flex", alignItems: "center", color: "white",  }}
      >
        <img
          src={image}
          alt="Flowbite React Logo"
          style={{ height: "40px", marginRight: "0.75rem" }}
        />
        <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>
           Developer
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse style={{ display: "flex", gap: "1rem" }}>
        <NavbarLink as={Link} to="/" style={{ color: "#facc15", fontWeight: 500 }}>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about" style={{ color: "#dbeafe", fontWeight: 500 }}>
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/services" style={{ color: "#dbeafe", fontWeight: 500 }}>
          Services
        </NavbarLink>
        <NavbarLink as={Link} to="/pricing" style={{ color: "#dbeafe", fontWeight: 500 }}>
          Pricing
        </NavbarLink>
        <NavbarLink as={Link} to="/contact" style={{ color: "#dbeafe", fontWeight: 500 }}>
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Navigations;
