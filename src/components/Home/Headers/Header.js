import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import './Header.css';

const Header = () => {
  const {user, SignOut}= useAuth();
    return (
        <>
        <Navbar collapseOnSelect expand="lg"  variant="dark" sticky="top" style={{height:'80px', backgroundColor:'goldenRod'}} >
  <Container>
  <Navbar.Brand href="#home"> Jenious Art Master</Navbar.Brand>
    <Nav className="ms-auto">
  
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
    <Nav.Link as={Link} to="/survice#survices">Survices</Nav.Link>
    <Nav.Link as={Link} to="/about#artist">Artist</Nav.Link>
    {user?.email?
    <Button onClick={SignOut} variant="light"> LogOut</Button>:
         <Nav.Link as={Link} to="/login">Login</Nav.Link>

    }
      <Navbar.Text>
        Signed in as: <a href="#login"> {user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Nav>
  </Container>
</Navbar>

      </>
     
    );
};

export default Header;