import { Container, Row, Col, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../AuthContext";
// import { useContext } from "react";
import Logout from "../components/LogOutButton";
import Navbars from "../components/Navbar";

export default function Dashboard() {

    return (
        <>
            <Navbars />
            <Container>
                <h1 className="my-4">Dashboard</h1>
                <Row>
                    <Col md={4}> {/*to edit the width of the card*/}
                        <Card className="my-1"> {/*to edit the margin top of the card to the "Dashboard"*/}
                            <Card.Body>
                                <Card.Title>Sigma School Analytics</Card.Title>
                                <Card.Text>People who graduate who get jobs: 80%</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Logout />
            </Container>
        </>
    );
}