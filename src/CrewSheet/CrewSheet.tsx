import React from 'react';
import CrewOverview from './CrewOverview'
import CaptainPanel from './CaptainPanel'
import Container from "react-bootstrap/Container"

type CrewSheetProps = {
    name : string
}

const CrewSheet = (props : CrewSheetProps) => {
    return (
        // <div className="CrewSheet">
        //     <p>this is the crew sheet {props.name}</p>
        // </div>
        <Container>
            <CrewOverview crewName="Test Crew" credits={400} experience={0} shipName="Test Ship Name"></CrewOverview>
            <CaptainPanel name="Test name" experience={0}></CaptainPanel>
        </Container>
        
    );
}

export default CrewSheet;