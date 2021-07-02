import React, { useState } from 'react'
import { Button } from "../ButtonElements"

import { InfoContainer, InfoWrapper, InfoColumn, TopLine, Heading, Subtitle, BtnWrap, ArrowForward, ArrowRight} from "./InfoElements"


const InfoSection = ({
    id, 
    gradientOrder,
    textColumn,
    emptyColumn,
    topLine, 
    lightText, 
    headline, 
    lightTextDesc,
    description, 
    buttonLabel, 
    img

}) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }



    return (
        <>
        <InfoContainer img={img} id={id} gradientOrder={gradientOrder}>
        <InfoWrapper className="container-fluid">
            <div className="row">
                <InfoColumn className={ "col-xl-6 " + textColumn }>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
            <BtnWrap>
            <Button to="/facilities" 
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
                {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>

            </BtnWrap>


                </InfoColumn>
                <div className={"col-xl-6 " + emptyColumn}>

                </div>
            </div>
        </InfoWrapper>
        </InfoContainer>

            
        </>
    )
}

export default InfoSection
