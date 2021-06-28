import React, {useState, useEffect} from 'react';
import {FaBars} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import {animateScroll as scroll} from "react-scroll"
import LogoIcon from "../../images/ihLogo.png";

import { Nav, NavbarContainer, GymIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from "./NavbarElements";

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
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks 
                    to="home"
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact="true" 
                    offset={-80} 
                    >
                    Home
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="facilities"
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact="true" 
                    offset={-80} 
                    >
                    Facilities
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="personaltraining"
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact="true" 
                    offset={-80} 
                    >
                    Personal Training
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="grouptraining"
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact="true" 
                    offset={-80} 
                    >
                    Group Training
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks 
                    to="membership"
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact="true" 
                    offset={-80} 
                    >
                    Membership
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks
                    to="signup"
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact="true" 
                    offset={-80} 
                    >
                    Sign Up
                    </NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                    <NavBtnLink to="/signin"> Sign In </NavBtnLink>
            </NavBtn>
        </NavbarContainer>

        </Nav>
        </IconContext.Provider>
            
        </>
    )
}

export default Navbar
