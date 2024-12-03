import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavBar: React.FC = () => {
  return (
    <Navbar style={{ backgroundColor: "#003161", padding: "10px 0" }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: "#fffefa", fontSize: "1.25rem" }}>
          Portfólio de Gustavo Muraoka Silva
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Container para o LinkedIn e o email */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a 
            href="https://www.linkedin.com/in/gustavo-muraoka-4256721ba/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img 
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" 
              alt="LinkedIn"
              style={{ width: "32px", height: "32px", borderRadius: "50%" }} 
            />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
