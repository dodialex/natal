import React from 'react';
import { Container, Navbar, Nav, NavDropdown, OverlayTrigger, Popover } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'


const Showreel = () => {
    return (
        <Container style={con}>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand style={nBrand}>
                    <Link to='/'>
                        <img
                            src='https://firebasestorage.googleapis.com/v0/b/paskah-133e0.appspot.com/o/logo.png?alt=media&token=c72c45d7-7268-4ca5-8223-f02d826da8a6'
                            width="70"
                            height="70"
                            className="d-inline-block"
                            alt="this a logo,check u'r connection internet"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to='/' style={link}>
                                HOME
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to='/showreel' style={link}>
                                SHOWREEL
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to='/showreel' style={link}>
                                PORTOFOLIO
                            </NavLink>
                        </Nav.Link>

                        {['bottom'].map((placement) => (
                            <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                        <Popover.Body>
                                            <NavDropdown.Item href="#action3">ABOUT US</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">TEAM</NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">ANIMATION PROCESS</NavDropdown.Item>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Nav.Link>
                                    <NavLink to='/showreel' style={link}>
                                        ABOUT
                                    </NavLink>
                                </Nav.Link>
                            </OverlayTrigger>
                        ))}

                        <Nav.Link>
                            <NavLink to='/showreel' style={link}>
                                CONTACT
                            </NavLink>
                        </Nav.Link>
                    </Nav>

                    <Nav className="me-auto"></Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >
    )
}

export default Showreel


const navvv = {
    marginLeft: '50px',
}

const link = {
    textDecoration: 'none',
    color: 'white',
}
const nBrand = {
    marginLeft: '30%'
}
const con = {
    marginTop: '5%'
}