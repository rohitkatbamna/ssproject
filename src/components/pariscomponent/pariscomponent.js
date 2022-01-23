import React from "react";
import './pariscomponent.css';
import parisimage from '../../assets/paris.jpg';

function Pariscomponent(){
    return(
        <div className="paris-component-all-of-it-change-margin">
            <div className="card shadow container-fluid">
                <div className="card-body row">
                    <div className="col-12 ">
                        <img src={parisimage} className="card-img-top" alt="paris" style={{height:'60%', width:'100%'}}/>
                        <p className="card-title text-center fs-1 fw-bold">Paris</p>
                        <p className="fs-4">
                        Paris, capital of France, is one of the most important and influential cities in the world. In terms of tourism, Paris is the second most visited city in Europe after London. In this travel guide, you’ll find out about the city’s top attractions, as well as useful travel advice on how to get to Paris and how to save money whilst traveling.
                        </p>
                        <p className="card-title text-center fs-1 fw-bold">Why Visit Paris?</p>
                        <p className="fs-4">
                        The capital of France seems to have been designed specifically for the enjoyment of its visitors. Its streets, squares, buildings, gardens and monuments beckon tourists to return, and indeed, many do.

                        Some of the most memorable things to do in Paris include visiting the Eiffel Tower, the Arc de Triomphe and Notre-Dame Cathedral. During the evening, experiencing one of the legendary Moulin Rouge cabaret shows, strolling through some of the most picturesque neighborhoods, like Montmartre, or climbing the Montparnasse Tower are a must.

                        It is always a good time to visit Paris. Depending on where you fly from, you can either make the most of the low-cost airlines flying into the city from other European cities, or take one of its direct flights from further away destinations. If you have children, why not surprise them with a trip to Disneyland?
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Pariscomponent;