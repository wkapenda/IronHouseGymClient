import styled from "styled-components"
import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md"

export const InfoContainer = styled.div `
  background: linear-gradient(to ${({ gradientOrder }) => (gradientOrder ? `right` : `left`)}, rgba(0,0,0,1), rgba(0,255,0,0.3)), url(${({ img }) => img});
  height: 100vh;
  background-position: center;
  background-size: cover;

`;


export const InfoWrapper = styled.div `
${'' /* display: grid; */}
${'' /* z-index: 1; */}
height: 100%;
width: 100%;
max-width: 1100px;

margin-left: auto;
margin-right: auto;
padding: 0px 12px;
justify-content: center;

`;


export const InfoColumn = styled.div `
margin-top: 25%;
${'' /* margin-top: 50%;
margin-bottom: auto; */}
padding: 0 15px;

@media screen and (max-width: 1140px) {
  text-align: center;
  padding: 0 20px;
} 

`;

export const TopLine = styled.p `
color: #01bf71;
font-size: 38px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 40px;

`;

export const Heading = styled.h1 `
margin-bottom: 24px;
font-size: 35px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

@media screen and (max-width: 480px){
    font-size: 22px;
}

`;

export const BtnWrap = styled.div `
margin-top: 32;
display: flex;
flex-direction: flex-start;


@media screen and (max-width: 1140px){
  justify-content: center;
}

`;

export const Subtitle = styled.p`

color: ${({ lightTextDesc }) => (lightTextDesc ? "#fff" : "#010606")};

`;

export const ImgWrap = styled.div `
max-width: 555px;
height: 100%;

`;


export const ArrowForward = styled(MdArrowForward) `
margin-left: 8px;
font-size: 20px
`;

export const ArrowRight = styled(MdKeyboardArrowRight) `
margin-left: 8px;
font-size: 20px
`;