import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import React from "react";

export default function DesktopNavbar() {
  return (
    <Navbar
    bg="primary"
    data-bs-theme="dark"
    className="shadow,sm px-4"
    style={{
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Container fluid className="d-flex justify-content-between aling-items-center">
      <Navbar.Brand 
      as={NavLink} to="/" 
      className="fw-bold fs-4 text-light"
      >
        Proyecto final ñam, mi cerebro ya no cerebrea
      </Navbar.Brand>

      <Nav className="d-flex aling-items-center gap-4">
        <Nav.Link as={NavLink} to="/" className="fs-6 text-light">
          Home
        </Nav.Link>

        <Nav.Link as={NavLink} to="/aboutmiembros" className="fs-6 text-light">
               About Miembros
        </Nav.Link>

        <NavDropdown
        title={<span className="text-light fs-6>Proyectos</span>"}
        id="projects-dropdown"
        menuVariant="dark"
        >
          <NavDropdown.Item as={NavLink} to="/proyecto2">
            Proyecto 2
          </NavDropdown.Item> 
          <NavDropdown.Item as={NavLink} to="/proyecto3">
            Proyecto 3
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/proyecto4">
            Proyecto 4
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/proyecto5">
            Proyecto 5
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link as={NavLink} to="/el coso de idiomas" className="fs-6 text-light">
          El Coso 
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}