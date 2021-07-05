import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';



import {animateScroll as scroll} from "react-scroll"
import LogoIcon from "../../images/ihLogo.png";
import "./footer.css";

import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    GymIconWrap,
    GymIcon,
    Designer
} from "./FooterElements";



const Footer = () => {

    let currentYear = new Date().getFullYear();

    const toggleHome = () => {
        scroll.scrollToTop();

    }

    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer className="container-fluid">
                <FooterLinksWrapper className="row">
                <FooterLinkItems className="col-lg-3">
                        <FooterLinkTitle> Contact Us </FooterLinkTitle> 
                        <ul><BiPhone /> <a href="tel:+264811649020">081-164-9020</a></ul>
                        <ul><AiOutlineMail /> <a href="mailto:procon3@africaonline.com.na">procon3@africaonline.com.na</a></ul>
                        <ul><GrLocation /> <a href="https://www.google.com/maps/place/Iron+House+Gym/@-22.590105,17.0803079,17z/data=!3m1!4b1!4m5!3m4!1s0x1c0b1bb0bfeb8259:0x48e96f0b71677331!8m2!3d-22.5899837!4d17.0825309" target="_blank">                          
                        14 Andimba Toivo-Ya-Toivo Street, Windhoek, Namibia.</a></ul>
                        
                    </FooterLinkItems>
                    <FooterLinkItems className="col-lg-3" style={{alignContent: "center"}}>
                        <FooterLinkTitle> Social Media </FooterLinkTitle> 
                        <SocialIcons>
                        <ul>
                        <SocialIconLink href="https://www.facebook.com/pages/category/Gym-Physical-Fitness-Center/Iron-House-Namibia-1311359662247419/" target="_blank" aria-label="Facebook">
                            <FaFacebook className="facebookIcon" />
                        </SocialIconLink>
                        </ul>
                        <ul>
                        <SocialIconLink href="https://www.instagram.com/ironhousenam/?hl=en" target="_blank" aria-label="Instagram">
                            <FaInstagram className="instagramIcon" />
                        </SocialIconLink>
                        </ul>
                        <ul>
                        <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                            <FaYoutube className="youTubeIcon" />
                        </SocialIconLink>
                        </ul>
                    </SocialIcons>
  
                    </FooterLinkItems>
                    <FooterLinkItems className="col-lg-3">
                        <FooterLinkTitle> Policies </FooterLinkTitle>
                        <ul><FooterLink to="/covid19" target="_blank">Covid-19</FooterLink></ul>
                        <ul><FooterLink to="/termsOfServices" target="_blank">Terms of Services</FooterLink></ul>
                        <ul><FooterLink to="/privacy" target="_blank">Privacy</FooterLink></ul>
                            
                            
                            
  
                    </FooterLinkItems>
                    <FooterLinkItems className="col-lg-3">
                        <FooterLinkTitle> Trading Hours </FooterLinkTitle> 
                        <ul>Weekly: 05h00 - 21H00</ul>
                        <ul>Saturday: 07h00 - 17H00</ul>
                        <ul>Sundays: 08h00 - 16H00</ul>
                        <ul>Holidays: 08h00 - 16H00</ul>
                            {/* <FooterLink to="/signin">Submit Video</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink> */}
                    </FooterLinkItems>
                </FooterLinksWrapper>

                {/* <FooterLinksWrapper>

                    <FooterLinkItems>
                        <FooterLinkTitle> Social Media </FooterLinkTitle> 
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">YouTube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                            <FooterLink to="/signin">TikTok</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper> */}
            </FooterLinksContainer>

        </FooterWrap>


            <SocialMedia className="container-fluid">
                <SocialMediaWrap className="row">
                <GymIconWrap to="/" onClick={toggleHome} className="logo col-lg-4">
                <GymIcon src={LogoIcon} />
                </GymIconWrap>
                
                {/* <p className="ihLogo col-lg-4">HIgh</p> */}
                    {/* <SocialLogo to="/" onClick={toggleHome}>Iron House Gym</SocialLogo> */}
                    <WebsiteRights className="trademark col-lg-4 ">Iron House Gym © {currentYear}. All Rights Reserved. </WebsiteRights>
                    <Designer className="designer col-lg-4">Designed & Developed by <a className="companyLink" href="">NiY<span style={{color:"red"}}>O</span></a> </Designer>

                </SocialMediaWrap>
            </SocialMedia>

        </FooterContainer>

    )
}

export default Footer
