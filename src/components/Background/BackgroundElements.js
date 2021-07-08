import styled from "styled-components"

export const BgContainer = styled.div `
background-color: #000000;
background-image: url("https://www.transparenttextures.com/patterns/black-felt.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  height: 100vh;
  background-position: center;
  background-size: cover;

`;


export const BgWrapper = styled.section `
${'' /* display: grid; */}
${'' /* z-index: 1; */}
height: 100%;
width: 100%;
${'' /* max-width: 1100px; */}

margin-left: auto;
margin-right: auto;
padding: 0px 12px;
justify-content: center;

`;