import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      sticky="top"
      collapseOnSelect
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>PHOTO</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};

export default Header;
