import { Card, Col, Container, Row } from "react-bootstrap";
import Logout from "../components/LogOutButton";
import Navbars from "../components/Navbar";

export default function Profile() {

    return (
        <>
            <Navbars />
            <Container>
                <h1 className="my-5">Profile Page</h1>
                <Row>
                    <Col md={4}> {/*to edit the width of the card*/}
                        <Card className="my-1"> {/*to edit the margin top of the card to the "Dashboard"*/}
                            <Card.Body>
                                <Card.Title>Username</Card.Title>
                                <Card.Text>Hello World</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Logout />
            </Container>
        </>
    );
}