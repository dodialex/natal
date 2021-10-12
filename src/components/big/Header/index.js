import React from 'react';
import { Navbar, Nav, Container, Dropdown, NavDropdown } from 'react-bootstrap';
import './header.css'

const Header = () => {
    return (
        <div className='-div'>
            <Navbar className="justify-content-center" className='navbar' collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>ShowReel</Nav.Link>
                        <Nav.Link>Portofolio</Nav.Link>

                        <NavDropdown title="About" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Team</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Animation Proccess</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
