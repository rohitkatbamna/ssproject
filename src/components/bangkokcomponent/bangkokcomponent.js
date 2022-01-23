import React from "react";
import './bangkokcomponent.css';
import bangkokimage from '../../assets/bangkok.jpg';
import cityobject from "../../assets/places";

function Bangkokcomponent(){
    return(
        <div className="bangkok-component-all-of-it-change-margin">
            <div className="card shadow container-fluid">
                <div className="card-body">
                    <div>
                    <div className="col-12 ">
                        <img src={bangkokimage} className="card-img-top" alt="paris" style={{height:'60%', width:'100%'}}/>
                        <p className="card-title text-center fs-1 fw-bold">Bangkok</p>
                        <p className="fs-4">
                        Bangkok has attracted millions of visitors annually for decades, offering tourists an incredible experience of cultural tradition-meets-modernity. It’s got world-class food, stunning historical landmarks, and some of the best hospitality around the globe.
                        </p>
                        <p className="card-title text-center fs-1 fw-bold">Why Visit Bangkok?</p>
                        <p className="fs-4">
                        The Grand Palace is located on over 54 acres and was once the private home of the Thai monarchy. The Grand Palace was built in 1782 and is now Bangkok’s most visited attraction, due to the gold plated walls, Buddhist sculptures, and elaborate paintings. The Temple of the Emerald Buddha is also known as Wat Phra Kaew and is the most popular temple at the palace. Along one of the inside walls, you will find a mural of the Ramayana, which is the longest wall painting in the world.
                        </p>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="row main-landing-content-card-image-margin">
                        <div className="col-12 text-center"><p className="fs-1 fw-bold">Best Hotels</p></div>
                        {cityobject.ban.map(newsdata =>
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
export default Bangkokcomponent;