import React from "react";
import './berlincomponent.css';
import berlinimage from '../../assets/berlin.jpg';
import cityobject from "../../assets/places";

function Berlincomponent(){
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    return(
        <div className="berlin-component-all-of-it-change-margin">
            <div className="card shadow container-fluid">
                <div className="card-body">
                    <div>
                    <div className="col-12 ">
                        <img src={berlinimage} className="card-img-top" alt="paris" style={{height:'60%', width:'100%'}}/>
                        <p className="card-title text-center fs-1 fw-bold">Berlin</p>
                        <p className="fs-4">
                        Pulsating with museums, tasty beer, cultural landmarks, creative minds, an unimaginable history and a wild nightlife, Berlin is a city celebrated for its freedom, creativity and grungy cool attitude. It’s a city like no other in the world, and just in case you ever needed a reason to visit.
                        </p>
                        <p className="card-title text-center fs-1 fw-bold">Why Visit Berlin?</p>
                        <p className="fs-4">
                        From the Soviet Memorial in Treptower Park and the remains of the Berlin Wall at East Side Gallery to the chilling Holocaust Memorial, from the Stasi Museum and the Book Burning Square, Berlin has been through a lot and its tumultuous history stands out. The city’s monuments and museums pay tribute to its tragedies and will give visitors goosebumps and an understanding of the history that continues to shape the city today.
                        </p>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="row main-landing-content-card-image-margin">
                        <div className="col-12 text-center"><p className="fs-1 fw-bold">Best Hotels</p></div>
                        {cityobject.ber.map(newsdata =>
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
export default Berlincomponent;