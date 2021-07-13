import styled from "styled-components"

export const CardsContainer = styled.section `
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
max-width: 600px;
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
padding: 0 2rem;


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

export const DeckH5 = styled.h5 `
color: green;
font-size: 1rem;
font-weight: bold;

`

export const DeckP = styled.p `
color: black;
font-size: 15px;

`

export const AmenitiesContainer = styled.section `


margin: 2rem auto;
max-width: 1200px;
${'' /* padding-left: 3rem; */}

`;



export const AmenitiesH1 = styled.h1 `
display: flex;
${'' /* flex-wrap: nowrap; */}
justify-content: center;
${'' /* align-self: center; */}
color: green;
margin-top: 42px;
font-size: 20px;
font-weight: bold;

`

export const AmenitiesP = styled.p `
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;
color: black;
margin-top: 21px;
font-size: 20px;
font-weight: bold;

`

export const IconsContainer = styled.section `


margin: 1rem auto;
max-width: 600px;
${'' /* padding-left: 3rem; */}

`;

export const IconsWrapper = styled.div `


${'' /* margin: 2rem auto;
max-width: 1200px;
padding-left: 3rem; */}

`;



export const AmenitiesH5 = styled.h5 `
display: flex;
${'' /* flex-wrap: nowrap; */}
justify-content: center;
${'' /* align-self: center; */}
color: black;
margin-top: 2rem;
font-size: 15px;
font-weight: bold;

`

export const AmenityContainer = styled.div `


margin: 1rem auto;
${'' /* max-width: 1000px; */}
${'' /* padding-left: 3rem; */}

`;

export const AmenityIcon = styled.div `


${'' /* margin: 2rem auto;
max-width: 1200px;
padding-left: 3rem; */}

`;

export const AmenityImage = styled.img `

border: 2px solid #DCE35B;
${'' /* border-color: green; */}

${'' /* margin: 2rem auto;
max-width: 1200px;
padding-left: 3rem; */}

`;