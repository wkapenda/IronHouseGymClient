import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"
import {FaBars} from "react-icons/fa"


export const Nav = styled.nav `
background: #fff;
${'' /* background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")}; */}
height: 80px;
${'' /* margin-top: -80px; */}
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}

`;

export const NavbarContainer = styled.div `
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
padding: 0 12px;
max-width: 1200px;
z-index: 1;

`;

export const GymIcon = styled.img `
height: 80px;
width: 150px;
margin-top: 10px;
margin-bottom: 15px;
`

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;

`;

export const MobileIcon = styled(FaBars)`
fill: black;

    &:hover {
        fill: green;
        transition: 0.2s ease-in-out;

    }

`;

export const MobileWrap= styled.div`

display: none;

@media screen and (max-width: 1140px){
    
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    
}

`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-left: 90px;

@media screen and (max-width: 1140px){
    display: none;
}

`;

export const NavItem = styled.li`
height: 80px;

`;

export const NavLinks = styled(LinkS)`
color: #fffff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #45B649;

}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 1140px){
    display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 5px;
background: #DCE35B;  /* fallback for old browsers */
${'' /* background: -webkit-linear-gradient(to right, #45B649, #DCE35B);  
background: linear-gradient(to right, #45B649, #DCE35B);  */}

${'' /* background: #01bf71; */}
white-space: now-rap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #45B649;
    color: #010606;
}
`;


export const NavIconLink = styled(LinkR)`

white-space: now-rap;
padding: 10px 0px 10px 80px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

`;


