import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavContainer, Logo, NavLinks } from './styles';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo as={Link} to="/">JB</Logo>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/skills">skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">contact</Link>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;