import React from "react";
import './mumbaicomponent.css';
import mumbaiimage from '../../assets/mumbai.jpg';
import cityobject from "../../assets/places";

function Mumbaicomponent(){
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    return(
        <div className="mumbai-component-all-of-it-change-margin">
            <div className="card shadow container-fluid">
                <div className="card-body">
                    <div>
                    <div className="col-12 ">
                        <img src={mumbaiimage} className="card-img-top" alt="paris" style={{height:'60%', width:'100%'}}/>
                        <p className="card-title text-center fs-1 fw-bold">Mumbai</p>
                        <p className="fs-4">
                        Also known as the City of Dreams, Mumbai is much more than just a bustling commercial capital; it is a phenomenon that everyone ought to experience. From its railway network that achieves nothing short of miracles everyday – carrying more passengers per kilometre than any railway network on earth – to its incredible ways of fostering a 20 plus million strong population that grows by the day.
                        </p>
                        <p className="card-title text-center fs-1 fw-bold">Why Visit Mumbai?</p>
                        <p className="fs-4">
                        Mumbai undoubtedly is among your finest options if you’re looking to sample India’s vibrant urban nightlife. From swanky clubs and lounges to edgy alternate and underground music venues, the city has something to offer everyone. It is also safer and better connected than other cities, making your night out a stress free event.
                        </p>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="row main-landing-content-card-image-margin">
                        <div className="col-12 text-center"><p className="fs-1 fw-bold">Best Hotels</p></div>
                        {cityobject.mum.map(newsdata =>
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
export default Mumbaicomponent;