import React from 'react'

import {
    ClassContainer,
    ClassWrapper,
    TextContainer,
    NameH2,
    DayH4,
    TimeP
} from "./ClassSectionElements"

const ClassSection = (prop) => {

    const [{ day, class: name, timePeriod}] = prop.session

    return (
        <ClassContainer>
        <ClassWrapper>
        <TextContainer>
            <NameH2> {name} </NameH2>
            <DayH4> {day} </DayH4>
            <TimeP> {timePeriod} </TimeP>
        </TextContainer>

        </ClassWrapper>
            
        </ClassContainer>
    )
}

export default ClassSection





