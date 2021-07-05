import styled from "styled-components"
import { Link } from "react-router-dom"

export const FooterContainer = styled.footer `
padding-top: 68px;

background: #45B649;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #DCE35B, #45B649);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #DCE35B, #45B649); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


`;

export const FooterWrap = styled.div `
padding: 48px 0px;
padding-left: 100px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
align-items: center;
max-width: 1325px;
margin: 0 auto;

`;

export const FooterLinksContainer = styled.div `
${'' /* display: flex;
justify-content: center;
align-items: center; */}

@media screen and (max-width: 820px){
    ${'' /* padding: 32px; */}
}
`;

export const FooterLinksWrapper = styled.div `
${'' /* display: flex; */}


@media screen and (max-width: 820px){
    ${'' /* flex-direction: column; */}
}
`;

export const FooterLinkItems = styled.div `
${'' /* display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 300px;
box-sizing: border-box;
color: #fff; */}

.col-md-4 {
    text-align: right;

}

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}

`;

export const FooterLinkTitle = styled.h1 `
font-size: 16px;
font-weight: bold;
margin-bottom: 16px;

`;

export const FooterLink = styled(Link) `
color: black;
text-decoration: none;
${'' /* margin-bottom: 0.5rem; */}
${'' /* font-size: 14px; */}

&:hover {
    color: white;
    transition: 0.3s ease-out;
}
`;


// Social Media

export const SocialMedia = styled.section `
${'' /* max-width: 1250px;
width: 100%; */}
`;

export const SocialMediaWrap = styled.div `
${'' /* display: flex;
margin-left: auto;
margin-right: auto;
justify-content: space-between;
align-items: center; */}
${'' /* display: flex;
flex-flow: row nowrap;
justify-content: space-between; */}
align-items: center;
${'' /* max-width: 100%; */}
margin: 40px 0px 0px;

@media screen and (max-width: 820px){
    flex-direction: start;
}
`;

export const SocialLogo = styled(Link) `
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

`

export const WebsiteRights = styled.small `
${'' /* color: black;
display: block;
  margin-left: auto;
  margin-right: auto; */}
${'' /* margin-bottom: 12px;
margin-left: 150px; */}
${'' /* margin-right: 80px; */}
${'' /* justify-content: center;
align-text: center; */}
`

export const Designer = styled.small `
color: black;
margin-bottom: 12px;
${'' /* margin-right: 80px; */}
${'' /* align-text: right; */}
`

export const SocialIcons = styled.div `
display: block;
margin-left: auto;
margin-right: auto;
justify-content: center;
align-items: center;
width: 200px;
${'' /* margin-bottom: 0.8rem; */}

@media screen and (max-width: 990px){
    margin: 0;
}

`;

export const SocialIconLink = styled.a `
color: black;
font-size: 24px;

`;

export const GymIconWrap = styled(Link) `

align-items: left;
cursor: pointer;
text-decoration: none;

`;

// export const NavLogo = styled(LinkR)`
// color: #fff;
// justify-self: flex-start;
// cursor: pointer;
// font-size: 1.5rem;
// display: flex;
// align-items: center;
// margin-left: 24px;
// font-weight: bold;
// text-decoration: none;

// `;

export const GymIcon = styled.img `
height: 50px;
max-width: 120px;
padding: 0;
${'' /* width: 130px; */}
margin-top:30px;
margin-bottom: 30px;

display: block;
${'' /* margin-left: auto;
margin-right: auto;
justify-content: space-between; */}
align-items: center;
`;


