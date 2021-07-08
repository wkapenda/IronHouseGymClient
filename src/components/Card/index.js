import React from 'react'
import Background from "../Background"


import { HeadingContainer, HeadingH1, CardsContainer, Row, Deck } from "./CardElements"


const Card = ({
    id, 
    img,
    title,
    data

}) => {

    let subset1 = data.slice(0, 3)
    let subset2 = data.slice(3, 6)
    let subset3 = data.slice(6, 9)


    return (
        <>
        

        <HeadingContainer>
            <HeadingH1>REACH FOR GREATNESS WITH OUR FIRST-CLASS STUDIOS, ROOMS, AND MORE</HeadingH1>
        </HeadingContainer>

        <CardsContainer className="cards container">

        {/* <div className="cards container">  */}
        <Row className="row">
        {subset1.map((facility, index) => {
          return (
            
            <Deck className={"card border border-success "+ + facility.order} style={{width : "22rem"}}>
            <div key={index}>
            <img src={facility.img} class="card-img-top" alt={facility.alt}  style={{height : "12rem"}} />
                <div class="card-body">
                    <h5 class="card-title">{facility.name}</h5>
                    <p class="card-text">{facility.desc}</p>
                </div>
            </div>
            </Deck>
            
          );
        })}

        </Row>

        <Row className="row">
        {subset2.map((facility, index) => {
        return (
            
            <Deck className={"card border border-success "+ + facility.order} style={{width : "22rem"}}>
            <div key={index}>
            <img src={facility.img} class="card-img-top" alt={facility.alt}  style={{height : "12rem"}} />
                <div class="card-body">
                    <h5 class="card-title">{facility.name}</h5>
                    <p class="card-text">{facility.desc}</p>
                </div>
            </div>
            </Deck>
            
        );
        })}

        </Row>

        <Row className="row">
        {subset3.map((facility, index) => {
        return (
            
            <Deck className={"card border border-success "+ + facility.order} style={{width : "22rem"}}>
            <div key={index}>
            <img src={facility.img} class="card-img-top" alt={facility.alt}  style={{height : "12rem"}} />
                <div class="card-body">
                    <h5 class="card-title">{facility.name}</h5>
                    <p class="card-text">{facility.desc}</p>
                </div>
            </div>
            </Deck>
            
        );
        })}
        </Row>

        {/* </div> */}


        </CardsContainer>

        </>
    )
}

export default Card