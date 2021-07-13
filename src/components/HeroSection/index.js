import React, {useState, useEffect} from 'react'
import Video from "../../videos/video.mov"
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements"
import {Button} from "../ButtonElements";
import { gsap, Power3 } from "gsap";


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    useEffect(() => {

        gsap.to(".heroHeading ",{
            delay: 0.3,
            duration: 0.7,
            y: -30,
            autoAlpha: 1,
            ease: Power3.out,
            stagger: 1.5,
            opacity: 1

          })
        gsap.to(".heroText",{
            delay: 0.3,
            duration: 1,
            y: -30,
            autoAlpha: 1,
            ease: Power3.out,
            stagger: 1.5,
            opacity: 1

          })

          gsap.to(".heroBtn",{
            delay: 0.4,
            duration: 1.2,
      
            autoAlpha: 1,
            ease: Power3.out,
            stagger: 1.5,
            opacity: 1

          })


    },[])



    // opacity: 1,
    // y: -20,
    // delay: 0.3





    return (
        <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
            <HeroH1 className="heroHeading">IRON HOUSE GYM</HeroH1>
            <HeroP className="heroText">Get the strength workouts, cardio equipment, 
            personal training and group exercise classes, all the support you need to crush your fitness goals. 
            Are you in?</HeroP>
            <HeroBtnWrapper>
            <Button to="signup" 
            className="heroBtn"
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
