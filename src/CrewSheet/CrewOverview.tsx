import React from "react";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import { Row } from "react-bootstrap";

type OverviewProps = {
    crewName : string,
    experience : number,
    shipName : string,
    credits : number,
    //todo add sub component for ship upgrades and ship hold
}

const CrewOverview = (props : OverviewProps) => {

    return (
        <Card>
            <Card.Header>General Info</Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Form.Group className="col-md-8">
                            <Form.Label>Crew Name</Form.Label>
                            <Form.Control type="text" placeholder="enter Crew's name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="col-md-4">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control type="number" placeholder="0"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="col-md-8">
                            <Form.Label>Ship Name</Form.Label>
                            <Form.Control type="text" placeholder="Ship Name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="col-md-4">
                            <Form.Label>Credits</Form.Label>
                            <Form.Control type="number" placeholder="400"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="col-md-12">
                            <Form.Label>Ship Upgrades</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Ship Upgrades"></Form.Control>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="col-md-12">
                            <Form.Label>Ship Hold</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Ship Hold"></Form.Control>
                        </Form.Group>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CrewOverview;