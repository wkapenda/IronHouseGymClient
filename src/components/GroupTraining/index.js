import React, {useState} from 'react'
import { TrainerSpan } from "../PersonalTrainers/PersonalTrainersElements"
import { Button } from "../ButtonElements"
import { ArrowRight, ArrowForward } from "../InfoSection/InfoElements"

// import "./trainers.css"

import {
    GroupTrainingContainer,
    GroupTrainingWrapper,
    DayContainer,
    DayH2,
    InfoContainer,
    LeftColumnContainer,
    RightColumnContainer
}
from "../GroupTraining/GroupTrainingElements"

const GroupTrainingSection = ({groupTrainingData}) => {

    const trainers = groupTrainingData.trainers;

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
        

        <GroupTrainingContainer >
        <GroupTrainingWrapper className="border-top border-success">

        <DayContainer>
            <DayH2>{groupTrainingData.day}</DayH2>
        </DayContainer>

        <InfoContainer>

        <LeftColumnContainer>
        <p>{groupTrainingData.class}</p>
        <p>{groupTrainingData.timePeriod}</p>
        <p>Trainers: {trainers.map((name, index) => {

            return (<TrainerSpan className="badge badge-success"> {name} </TrainerSpan>)
        })}

        </p>

        </LeftColumnContainer>
        

        <RightColumnContainer>
        <Button to={groupTrainingData.classRoute} 
            className="facilityBtn"
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true} 
            duration={500} 
            spy={true}
            exact="true" 
            offset={-80}
            >
                {groupTrainingData.btnDesc} {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>



        </RightColumnContainer>



        </InfoContainer>



        </GroupTrainingWrapper>

        </GroupTrainingContainer>




            
        </>
    )
}

export default GroupTrainingSection