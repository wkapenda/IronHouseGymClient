import React from 'react'
import { ReactSVG } from 'react-svg'
import Background from "../Background"


import { 
    HeadingContainer, 
    HeadingH1, 
    CardsContainer, 
    Row, 
    Deck, 
    DeckH5, 
    DeckP, 
    AmenitiesContainer, 
    AmenitiesH1, 
    AmenitiesP,
    IconsContainer,
    IconsWrapper,
    AmenityContainer,
    AmenityIcon,
    AmenitiesH5,
    AmenityImage
} from "./CardElements"


const Card = ({
 
    data,
    data1

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
        {data.map((facility, index) => {
          return (
            
            <Deck className={"card border border-success shadow rounded "} style={{width : "22rem", height : "20rem"}}>
            <div key={index}>
            
            <img src={facility.img} class="card-img-top" alt={facility.alt}  style={{height : "12rem"}} />
                <div class="card-body">
                    <DeckH5 class="card-title">{facility.name}</DeckH5>
                    <DeckP class="card-text">{facility.desc}</DeckP>
                </div>
            </div>
            </Deck>
            
          );
        })}

        </Row>

        {/* <Row className="row">
        {subset2.map((facility, index) => {
        return (
            
            <Deck className={"card border border-success shadow rounded "+ + facility.order} style={{width : "22rem"}}>
            <div key={index}>
            <img src={facility.img} class="card-img-top" alt={facility.alt}  style={{height : "12rem"}} />
                <div class="card-body">
                    <DeckH5 class="card-title">{facility.name}</DeckH5>
                    <DeckP class="card-text">{facility.desc}</DeckP>
                </div>
            </div>
            </Deck>
            
        );
        })}

        </Row>

        <Row className="row">
        {subset3.map((facility, index) => {
        return (
            
            <Deck className={"card border border-success shadow rounded "+ + facility.order} style={{width : "22rem"}}>
            <div key={index}>
            <img src={facility.img} class="card-img-top" alt={facility.alt}  style={{height : "12rem"}} />
                <div class="card-body">
                    <DeckH5 class="card-title">{facility.name}</DeckH5>
                    <DeckP class="card-text">{facility.desc}</DeckP>
                </div>
            </div>
            </Deck>
            
        );
        })}
        </Row> */}

        {/* </div> */}


        </CardsContainer>

        <AmenitiesContainer className="container-fluid">

        <AmenitiesH1>MORE FACILITIES</AmenitiesH1>
      
        <AmenitiesP>Here are more Amenities available at the Iron House Gym</AmenitiesP>

        <IconsContainer className="container-fluid">
            <IconsWrapper className="row">
            {data1.map((amenities, index) => {
                return (

            <AmenityContainer className="amenity ">
            <AmenityIcon className="svgIcon">
            {/* <ReactSVG className="border border-success shadow rounded-circle" src={amenities.img} wrapper="svg"  style={{height : "15rem"}}/> */}
            <AmenityImage className="shadow rounded-circle" src={amenities.img} alt={amenities.alt} style={{height : "10rem", padding: "25px"}} />

            </AmenityIcon>
            <AmenitiesH5>{amenities.name}</AmenitiesH5>
            </AmenityContainer>

            );
        })}

            </IconsWrapper>
        </IconsContainer>

        </AmenitiesContainer>



            


        </>
    )
}

export default Card