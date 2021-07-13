import React from 'react'
import {HeadingContainer, HeadingH1 } from "../Card/CardElements"
import {
    TrainersContainer,
    TrainersCardsContainer,
    TrainersRow,
    TrainerCard,
    TrainerH5,
    TrainerP,
    TrainerSpan
}
from "../PersonalTrainers/PersonalTrainersElements"

const PersonalTrainers = ({trainersData}) => {

    
    return (
        <>
        
        <HeadingContainer>
            <HeadingH1>OUR EXPERT TRAINERS KNOW HOW TO DESIGN A PROGRAM TO SUPPORT YOUR FITNESS GOALS</HeadingH1>
        </HeadingContainer>

        <TrainersCardsContainer className="cards ">


        <TrainersRow className="row">
        {trainersData.map((trainers, index) => {
        const traits = trainers.specialities;
        return (
            
            <TrainerCard className={"card border border-success shadow rounded "} style={{width : "32rem", height : "30rem"}}>
            <div key={index}>
            
            <img src={trainers.img} className="card-img-top" alt={trainers.alt}  style={{height : "22rem"}} />
                <div className="card-body">
                    <TrainerH5 className="card-title">{trainers.trainerName}</TrainerH5>
                    <TrainerP className="card-text">Specialities:
                    {traits.map((niche, index) => {
                         
                        return (
                            <TrainerSpan className="badge badge-success">{niche}</TrainerSpan>
                        )
                        
                    })}
                    </TrainerP>
                    
                </div>
            </div>
            </TrainerCard>
            
        );
        })}

        </TrainersRow>

        </TrainersCardsContainer>


            
        </>
    )
}

export default PersonalTrainers
