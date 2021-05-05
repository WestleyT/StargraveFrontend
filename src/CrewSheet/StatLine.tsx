import React, { useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";

type StatProps = {
    move : number,
    fight : number,
    shoot : number,
    armor : number,
    will : number,
    health : number,
    currentHealth : number
}

const StatLine = (props : StatProps) => {
    const [move, setMove] = useState(props.move);
    const [fight, setFight] = useState(props.fight);
    const [shoot, setShoot] = useState(props.shoot);
    const [armor, setArmor] = useState(props.armor);
    const [will, setWill] =  useState(props.will);
    const [health, setHealth] = useState(props.health);
    const [currentHealth, setCurrentHealth] = useState(props.currentHealth);

    return (
        <Row className="col-md-12 flex-nowrap">
            <Form.Group>
                <Form.Label>Move</Form.Label>
                <Form.Control type="text" onChange={(event) => setMove(Number(event.target.value))} value={move}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Fight</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>+</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control type="text" onChange={(event) => setFight(Number(event.target.value))} value={fight}></Form.Control>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Shoot</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>+</InputGroup.Text>
                        <Form.Control type="text" onChange={(event) => setShoot(Number(event.target.value))} value={shoot}></Form.Control>
                    </InputGroup.Prepend>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Armor</Form.Label>
                <Form.Control type="text" onChange={(event) => setArmor(Number(event.target.value))} value={armor}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Will</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>+</InputGroup.Text>
                        <Form.Control type="text" onChange={(event) => setWill(Number(event.target.value))} value={will}></Form.Control>
                    </InputGroup.Prepend>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Health</Form.Label>
                <Form.Control type="text" onChange={(event) => setHealth(Number(event.target.value))} value={health}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Current Health</Form.Label>
                <Form.Control type="text" onChange={(event) => setCurrentHealth(Number(event.target.value))} value={currentHealth}></Form.Control>
            </Form.Group>
        </Row>
    )
}

export default StatLine;