import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"

export const Button = styled(LinkR) `
border-radius: 50px;
background: ${({primary}) => (primary ? "#DCE35B" : "#010606")};
white-space: nowrap;
padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
color: ${({dark}) => (dark ? "#010606" : "#fff")};
font-size: ${({fontBig}) => (fontBig ? "20" : "16")};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
margin-top: 24px;
opacity: 1;

&:hover {
    color: black;
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? "#45B649" : "#DCE35B")};
    text-decoration: none;
}

`