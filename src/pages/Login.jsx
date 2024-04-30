import { useContext, useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import Navbars from "../components/Navbar";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    function login() {
        const isCorrectUsername = (username === "danial@gmail.com");
        const isCorrectPassword = (password === "abc123");
        // if both of these are true, continue
        if (isCorrectUsername && isCorrectPassword) {
            authContext.setToken("1234");
            navigate("/Dashboard");
        }
    }

    return (
        <>
            <Navbars />
            <Container>
                <h1 className="my-5">Login to your account</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="warning" onClick={login}>
                        Login
                    </Button>
                </Form>
            </Container>
        </>
    );
}