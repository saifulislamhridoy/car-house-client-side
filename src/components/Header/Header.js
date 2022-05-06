import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><span className='text-danger'>Car</span> House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {
                            user && <Nav.Link as={Link} to="/manageitems">Manage Items</Nav.Link>
                        }
                        {
                            user && <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                        }
                        {
                         user && <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
                        }
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ? <Nav.Link as={Link} onClick={()=>signOut(auth)} to="/login">LogOut</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;