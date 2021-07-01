import styled from "styled-components"
import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md"

export const InfoContainer = styled.div `
  background: linear-gradient(to right, rgba(0,0,0,1), rgba(0,255,0,0.3)),
  url(${({ img }) => img}) ;
  height: 100vh;
  background-position: center;
  background-size: cover;

`;


export const InfoWrapper = styled.div `
display: grid;
z-index: 1;
height: 100%;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0px 12px;
justify-content: center;

`;

export const InfoRow = styled.div `
${'' /* display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col1'` : `'col1 col1' 'col2 col2'`)};
    display: block;
} */}
`;

export const Column1 = styled.div `


margin-top: auto;
margin-bottom: auto;
padding: 0 15px;

@media screen and (max-width: 1140px) {
  text-align: center;
  padding: 0 20px;
} 

`;

export const Column2 = styled.div `
${'' /* margin-bottom: 15px;
margin-top: 100px; */}
${'' /* padding: 0 15px; */}
${'' /* grid-area: col2; */}

`;

export const TextWrapper = styled.div `
${'' /* max-width: 1000px;
padding-top: 0;
padding-bottom: 60px; */}

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


export const Subtitle = styled.p`
${'' /* max-width: 700px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px; */}
color: ${({ lightTextDesc }) => (lightTextDesc ? "#fff" : "#010606")};

`;


// export const BtnWrap = styled.div `
// display: flex;
// justify-content: flex-start;

// `;

export const ImgWrap = styled.div `
max-width: 555px;
height: 100%;

`;

export const Img = styled.img `
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`;

export const BtnWrap = styled.div `

margin-top: 24;
display: flex;
flex-direction: flex-start;
align-items: center;

@media screen and (max-width: 1140px) {
  flex-direction: column;
} 

`

export const ArrowForward = styled(MdArrowForward) `
margin-left: 8px;
font-size: 20px
`

export const ArrowRight = styled(MdKeyboardArrowRight) `
margin-left: 8px;
font-size: 20px
`