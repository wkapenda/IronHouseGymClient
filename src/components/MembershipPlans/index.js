import React, {useState} from 'react'
import { Button } from "../ButtonElements"
// import { ArrowRight, ArrowForward } from "../InfoSection/InfoElements"


import { 
    PlanCardContainer,
    PlanCardWrapper,
    PlanNameH5,
    PriceH6,
    PaymentMethodP,
    ButtonWrapper

} from "./PlansElements"

import { 
    HeadingContainer, 
    HeadingH1, 
    CardsContainer, 
    Row, 
    Deck
} from "../Card/CardElements"


const MembershipPlans = ({ data }) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <>
        

        <HeadingContainer>
            <HeadingH1>CHECK OUT OUR AFFORDABLE GYM MEMBERSHIPS, WE HAVE SOMETHING SUITABLE FOR EVERYONE, JOIN US NOW!</HeadingH1>
        </HeadingContainer>

        <CardsContainer className="plans container">

        <Row className="row">
        {data.map((plan, index) => {
          return (
            
            <Deck className={"card border border-success shadow rounded "} style={{width : "22rem", height : "18rem"}}>
            <PlanCardContainer key={index}>
            
                <PlanCardWrapper class="card-body">
                    <PlanNameH5 class="card-title">{plan.name}</PlanNameH5>
                    <PriceH6 class="card-text">{plan.amount}</PriceH6>
                    <PaymentMethodP class="card-text">{plan.desc}</PaymentMethodP>
                </PlanCardWrapper>

                <ButtonWrapper>
                <Button to={plan.route} 
                    className="planBtn"
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact="true" 
                    offset={-80}
                    >
                    SELECT
                </Button>
                </ButtonWrapper>

            </PlanCardContainer>
            </Deck>
            
          );
        })}

        </Row>


        </CardsContainer>

        </>
    )
}

export default MembershipPlans