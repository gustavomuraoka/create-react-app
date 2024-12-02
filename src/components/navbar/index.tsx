import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { FaLinkedin } from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <Navbar style={{ backgroundColor: "#244855" }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: "#FBE9D0" }}>Portfólio de Gustavo Muraoka Silva</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Container para o LinkedIn e o email */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "#FBE9D0" }}>gustavomuraoka15@gmail.com</span>
          <a 
            href="https://www.linkedin.com/in/gustavo-muraoka-4256721ba/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: "inherit" }}
          >
            <FaLinkedin size={24} color='#FBE9D0' />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
