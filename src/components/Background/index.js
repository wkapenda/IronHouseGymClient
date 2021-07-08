import React, { useState } from 'react'


import { BgContainer, BgWrapper } from "./BackgroundElements"


const Background = (props, {
    id,
    type
    

}) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }



    return (
        <>
        <BgContainer type={type} id={id}>
        <BgWrapper className="container-fluid">

        {props.children}
        


        </BgWrapper>
        </BgContainer>

            
        </>
    )
}

export default Background