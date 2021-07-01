import React, { useState } from 'react'
import { Button } from "../ButtonElements"

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, img, ArrowForward, ArrowRight } from "./InfoElements"


const InfoSection = ({
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    lightTextDesc,
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2

}) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }



    return (
        <>
        <InfoContainer img={img} id={id} >
        <InfoWrapper className="container-fluid">
            <InfoRow imgStart={imgStart} className="row">
                <Column1 className="col-xl-6">
                <TextWrapper>
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
                </TextWrapper>
                </Column1>
                {/* <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Column2> */}
            </InfoRow>
        </InfoWrapper>
        </InfoContainer>

            
        </>
    )
}

export default InfoSection
