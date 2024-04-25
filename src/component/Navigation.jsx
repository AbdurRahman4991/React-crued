import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary shadow">
                <Container >
                    <Link className='navbar-brand' to="/">Navbar scroll</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/about'>About us</Link>
                        <Link className='nav-link' to='/student'>Student info</Link>
                        <Link className='nav-link' to='/contact'>Contact us</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>           
        </>
    );
}

export default Navigation;