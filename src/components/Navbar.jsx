import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logout from './LogOutButton';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export default function Navbars() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    function navigateToHome() {
        navigate("/")
    }

    function navigateToLogin() {
        authContext.setToken(null);
        navigate("/Login")
    }

    function navigateToProfile() {
        navigate("/Profile")
    }

    function navigateToDashboard() {
        navigate("/Dashboard")
    }

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Login App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
                        <Nav.Link onClick={navigateToLogin}>Login</Nav.Link>
                        <Nav.Link onClick={navigateToDashboard}>Dashboard</Nav.Link>
                        <Nav.Link onClick={navigateToProfile}>Profile</Nav.Link>
                    </Nav>
                    <Logout />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}