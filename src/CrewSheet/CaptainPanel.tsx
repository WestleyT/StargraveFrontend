import React, { useState } from "react";
import { Form, Row, Card, Table } from "react-bootstrap";
import { isBreakOrContinueStatement } from "typescript";
import StatLine from "./StatLine";

type CaptainProps = {
    captainProps : {
        name : string,
        level : number
    }
}

const CaptainPanel = ({captainProps} : CaptainProps) => {
    const statLine = {
        move : 6,
        fight : 3,
        shoot : 2,
        armor : 9,
        will : 3,
        health : 16,
        currentHealth : 16
    }
    const [stats, setStats] = useState(statLine);

    return (
        <Card>
            <Card.Header>Captain</Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Form.Group className="col-md-8">
                            <Form.Label>Captain</Form.Label>
                            <Form.Control type="text" placeholder="Captain's Name" value={captainProps.name}></Form.Control>
                        </Form.Group>
                        <Form.Group className="col-md-2">
                            <Form.Label>Background</Form.Label>
                            <Form.Control as="select" onChange={(event) => {
                                switch(event.target.value) {
                                    case "Robotics Expert": {
                                        let newStats = stats;
                                        newStats.will += 1;
                                        setStats(newStats);
                                        break;
                                    }
                                    case "Mystic": {
                                        break;
                                    }
                                    default: {
                                        console.log('default');
                                    }
                                }
                            }}>
                                <option> </option>
                                <option>Robotics Expert</option>
                                <option>Mystic</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="col-md-2">
                            <Form.Label>Level</Form.Label>
                            <Form.Control type="number" placeholder="0"></Form.Control>
                        </Form.Group>
                    </Row>
                    <StatLine key="stats" stats={stats} ></StatLine>
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
                <Row>
                    <Form.Group className="col-md-12">
                        <Form.Label>Gear/Notes</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="gear and notes"></Form.Control>
                    </Form.Group>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CaptainPanel;