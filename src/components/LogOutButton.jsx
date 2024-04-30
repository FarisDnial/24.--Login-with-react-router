import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { Button } from "react-bootstrap";

export default function Logout() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    function logout() {
        authContext.setToken(null);
        navigate("/Login")
    }

    return (
        <Button className="my-3" variant="warning" onClick={logout}>
            Log out
        </Button>
    );

}