import React, {useState} from 'react'
import Video from "../../videos/video.mp4"
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements"
import {Button} from "../ButtonElements";


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }



    return (
        <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
            <HeroH1>IRON HOUSE GYM</HeroH1>
            <HeroP>Get the strength workouts, cardio equipment, 
            group exercise classes and personal training, all the support you need to crush your fitness goals. 
            Are you in?</HeroP>
            <HeroBtnWrapper>
            <Button to="signup" 
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
                Join Now {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>

            </HeroBtnWrapper>
        </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
