import React from 'react';
import CrewOverview from './CrewOverview'
import CaptainPanel from './CaptainPanel'
import Container from "react-bootstrap/Container"

type CrewSheetProps = {
    name : string
}

const CrewSheet = (props : CrewSheetProps) => {
    const captainInfo = {
        name : 'Capitain Test',
        level : 16
    }
    return (
        // <div className="CrewSheet">
        //     <p>this is the crew sheet {props.name}</p>
        // </div>
        <Container>
            <CrewOverview crewName="Test Crew" credits={400} experience={0} shipName="Test Ship Name"></CrewOverview>
            <CaptainPanel captainProps={captainInfo}></CaptainPanel>
        </Container>
        
    );
}

export default CrewSheet;