import React from "react";
import { Form, Row, Card } from "react-bootstrap";

type CaptainProps = {
    name : string,
    experience : number
}

const CaptainPanel = (props : CaptainProps) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Captain</Card.Title>
                <Form>
                    <Row>
                        <Form.Group className="col-md-8">
                            <Form.Label>Captain</Form.Label>
                            <Form.Control type="text" placeholder="Captain's Name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="col-md-4">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control type="number" placeholder="0"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Move</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fight</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Shoot</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Armor</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Will</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Health</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Current Health</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CaptainPanel;