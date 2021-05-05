import React from "react";
import { Form, Row, Card } from "react-bootstrap";
import StatLine from "./StatLine";

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
                    <StatLine move={6} fight={3} shoot={2} armor={9} will={3} health={16} currentHealth={16} ></StatLine>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CaptainPanel;