import React, { useEffect, useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";

type StatProps = {
    stats : {
        move : number,
        fight : number,
        shoot : number,
        armor : number,
        will : number,
        health : number,
        currentHealth : number
    }
}

const StatLine = ({stats} : StatProps) => {
    // const [move, setMove] = useState(stats.move);
    // const [fight, setFight] = useState(stats.fight);
    // const [shoot, setShoot] = useState(stats.shoot);
    // const [armor, setArmor] = useState(stats.armor);
    // const [will, setWill] =  useState(stats.will);
    // const [health, setHealth] = useState(stats.health);
    // const [currentHealth, setCurrentHealth] = useState(stats.currentHealth);

    useEffect(() => {
        
    });

    return (
        <Row className="col-md-12 flex-nowrap">
            <Form.Group>
                <Form.Label>Move</Form.Label>
                <Form.Control type="text" value={stats.move} readOnly></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Fight</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>+</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" value={stats.fight} readOnly></Form.Control>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Shoot</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>+</InputGroup.Text>
                        <Form.Control type="text" value={stats.shoot} readOnly></Form.Control>
                    </InputGroup.Prepend>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Armor</Form.Label>
                <Form.Control type="text" value={stats.armor} readOnly></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Will</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>+</InputGroup.Text>
                        <Form.Control type="text" value={stats.will} readOnly></Form.Control>
                    </InputGroup.Prepend>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Health</Form.Label>
                <Form.Control type="text" value={stats.health} readOnly></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Current Health</Form.Label>
                <Form.Control type="text" value={stats.currentHealth}></Form.Control>
            </Form.Group>
        </Row>
    )
}

export default StatLine;