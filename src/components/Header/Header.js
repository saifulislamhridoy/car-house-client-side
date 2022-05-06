import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><span className='text-danger'>Car</span> House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to="/manageitems">Manage Items</Nav.Link>
                        <Nav.Link to="/additem">Add Item</Nav.Link>
                        <Nav.Link to="myitems">My Items</Nav.Link>
                        <Nav.Link to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;