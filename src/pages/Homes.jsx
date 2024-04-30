import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbars from "../components/Navbar";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";

export default function Home() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext)

  function navigateToLogin() {
    authContext.setToken(null);
    navigate("/Login")
  }

  return (
    <>
      <Navbars />
      <Container>
        <h1 className="my-5 text-center">Welcome Home!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Button className="my-3" variant="warning" onClick={navigateToLogin}>Login?</Button>
      </Container>
    </>
  );
}