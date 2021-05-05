import React from "react";
import { Form, Row, Card, Table } from "react-bootstrap";
import StatLine from "./StatLine";

type CaptainProps = {
    name : string,
    experience : number
}

const CaptainPanel = (props : CaptainProps) => {
    return (
        <Card>
            <Card.Header>Captain</Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Form.Group className="col-md-8">
                            <Form.Label>Captain</Form.Label>
                            <Form.Control type="text" placeholder="Captain's Name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="col-md-4">
                            <Form.Label>Level</Form.Label>
                            <Form.Control type="number" placeholder="0"></Form.Control>
                        </Form.Group>
                    </Row>
                    <StatLine move={6} fight={3} shoot={2} armor={9} will={3} health={16} currentHealth={16} ></StatLine>
                </Form>
                <Card.Title>Powers</Card.Title>
                <Table striped bordered>
                    <thead>
                        <th>Name</th>
                        <th>Activation</th>
                        <th>Strain</th>
                        <th>Category</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Control Robot</td>
                            <td>10</td>
                            <td>1</td>
                            <td>Line of Sight</td>
                        </tr>
                        <tr>
                            <td>Holographic Wall</td>
                            <td>10</td>
                            <td>1</td>
                            <td>Line of Sight</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default CaptainPanel;