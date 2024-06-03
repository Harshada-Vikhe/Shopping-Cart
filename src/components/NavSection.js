import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { Card, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import { Link } from 'react-router-dom';



function NavSection() {
  const count= useSelector(state=>state.card)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-1"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            
            
          </Nav>
          
            <Button variant="outline-success">
            <Nav.Link to="/carts"  as={Link}className="outline-success">Cart ({count.length})
            
            </Nav.Link>
            </Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSection;