import React from 'react'


import { IntroContainer, IntroWrapper, IntroContent, IntroH1} from "./IntroElements"


const IntroSection = ({
    id, 
    img,
    title

}) => {


    return (
        <>
        <IntroContainer img={img} id={id}>
            <IntroWrapper>
            <IntroContent>
            <IntroH1 className="heroHeading">{title}</IntroH1>
            </IntroContent>
        </IntroWrapper>
        </IntroContainer>

            
        </>
    )
}

export default IntroSection