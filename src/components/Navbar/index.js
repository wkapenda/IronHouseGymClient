import React, {useState, useEffect} from 'react';
import {IconContext} from "react-icons/lib"
import {animateScroll as scroll} from "react-scroll"
import LogoIcon from "../../images/ihLogo.png";
import { VscAccount } from "react-icons/vsc"
import "./navbar.css";

import { Nav, NavbarContainer, GymIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavIconLink, MobileWrap} from "./NavbarElements";

//rafpce

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();

    }

    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}> 
            <GymIcon src={LogoIcon} />
             </NavLogo>
            <MobileWrap onClick={toggle}>
                <MobileIcon />
            </MobileWrap>
            <NavMenu>
                <NavItem>
                    <NavLinks 
                    to="/"
                    >
                    Home
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="/facilities"
                    >
                    Facilities
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="/personalTraining"
                    >
                    Personal Training
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="/groupTraining"
                    >
                    Group Training
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="/membership"
                    >
                    Membership
                    </NavLinks>
                </NavItem>
                
            </NavMenu>
            <NavBtn>
            <NavIconLink to="/account"><VscAccount className="accountIcon" /></NavIconLink>
            
            </NavBtn>
            
            <NavBtn className="contactBtn">
                    <NavBtnLink to="/contact">Contact Us</NavBtnLink>
            </NavBtn>
        </NavbarContainer>

        </Nav>
        </IconContext.Provider>
            
        </>
    )
}

export default Navbar
