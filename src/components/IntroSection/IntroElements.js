import styled from "styled-components"

export const IntroContainer = styled.div `
  background: linear-gradient(to right, rgba(0,0,0,1), rgba(0,255,0,0.3)), url(${({ img }) => img});
  ${'' /* background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%); */}
  height: 200px;
  width: 100%;
  background-position: center;
  background-size: cover;

`;


export const IntroWrapper = styled.div `
${'' /* display: grid; */}
${'' /* z-index: 1; */}
height: 100%;
width: 100%;
max-width: 1100px;

margin: 0 auto;
padding: 0px 12px;
justify-content: center;

`;

export const IntroContent = styled.div `
z-index: 3;
${'' /* max-width: 1200px; */}
padding: 60px 24px 8px;
display: flex;
${'' /* flex-direction: column;
align-items: center; */}
flex-direction: row;
text-align: center;
justify-content: center;
`

export const IntroH1 = styled.h1 `
color: white;
font-size: 70px;
font-weight: bold;
text-align: center;

@media screen and (max-width: 768px){
    margin-top: 20px;
    font-size: 52px;
}

@media screen and (max-width: 480px){
    margin-top: 15%;
    font-size: 32px;
}

`