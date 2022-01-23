import React from "react";
import './losangelescomponent.css';
import losangelesimage from '../../assets/losangeles.jpg';
import cityobject from "../../assets/places";

function Losangelescomponent(){
    return(
        <div className="bangkok-component-all-of-it-change-margin">
            <div className="card shadow container-fluid">
                <div className="card-body">
                    <div>
                    <div className="col-12 ">
                        <img src={losangelesimage} className="card-img-top" alt="paris" style={{height:'60%', width:'100%'}}/>
                        <p className="card-title text-center fs-1 fw-bold">Los Angeles</p>
                        <p className="fs-4">
                        With iconic landmarks, a vibrant cultural scene and sunny skies throughout the year, there is no shortage of reasons to visit Los Angeles. From art at the Getty Center to hiking in Malibu, our top picks highlight why LA should be at the top of your travel bucket list.
                        </p>
                        <p className="card-title text-center fs-1 fw-bold">Why Visit Los Angeles?</p>
                        <p className="fs-4">
                        Los Angeles County has over 70 miles of coastline, and it’s all beautiful. Some tourists flock to the busier shores of Santa Monica or Venice Beach for people-watching and sightseeing, while others prefer the more secluded beaches of nearby Malibu. Orange County has gorgeous beaches too, and it’s just a short car or train ride away.
                        </p>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="row main-landing-content-card-image-margin">
                        <div className="col-12 text-center"><p className="fs-1 fw-bold">Best Hotels</p></div>
                        {cityobject.los.map(newsdata =>
                            {
                            return(
                                <div className="col-xl-3 col-xxl-3 col-lg-4 col-md-5 col-sm-7 ms-auto me-auto mt-5 mb-5">
                                    <div className="card shadow text-center" style={{ borderRadius:'16px',minHeight:'474px'}}>
                                        <img src={newsdata.optimizedThumbUrls.srpDesktop} style={{height:'50%'}} alt={newsdata.name} />
                                        <div className="card-body">
                                            <h2 className="fw-bold card-title">{newsdata.name}</h2>
                                            <h3 className="card-text">{newsdata.address.streetAddress}</h3>
                                            <h4 className="card-text">{newsdata.address.locality} {newsdata.address.postalCode}</h4>
                                            <h4 className="mb-auto fw-bold float-bottom">Current Price {newsdata.ratePlan.price.current}</h4>
                                        </div>
                                    </div>
                                </div>
                            );
                            }
                            )
                        }
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Losangelescomponent;