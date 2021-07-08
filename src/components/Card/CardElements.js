import styled from "styled-components"

export const CardsContainer = styled.div `
  ${'' /* background: linear-gradient(to right, rgba(0,0,0,1), rgba(0,255,0,0.3)); */}
  ${'' /* background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%); */}
  ${'' /* height: 200px;
  width: 100%;
  background-position: center;
  background-size: cover; */}

  margin: 2rem auto;
max-width: 1200px;
${'' /* flex-direction: row;
text-align: center; */}
${'' /* display: flex; */}
display: flex;
  flex-wrap: wrap;
  align-content: center;
justify-content: center;
align-self: center;
padding-left: 3rem;

`;

export const HeadingContainer = styled.div `
z-index: 3;
${'' /* max-width: 1200px; */}
${'' /* position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: start; */}
${'' /* align-items: center; */}
margin: 0 auto;
max-width: 1000px;
display: flex;
flex-direction: row;
text-align: center;
justify-content: center;
`

export const HeadingH1 = styled.h1 `
color: black;
margin-top: 42px;
font-size: 20px;
font-weight: bold;

`

export const Row = styled.div `
margin-top: 0.5rem;
margin-bottom: 0.5rem;

`

export const Deck = styled.div `
margin-left: 0.5rem;
margin-right: 0.5rem;
background: #DCE35B;

`