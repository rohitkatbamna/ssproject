import React from "react";
import './delhicomponent.css';
import delhiimage from '../../assets/delhi.jpg';
import cityobject from "../../assets/places";

function Delhicomponent(){
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    return(
        <div className="delhi-component-all-of-it-change-margin">
            <div className="card shadow container-fluid">
                <div className="card-body">
                    <div>
                    <div className="col-12 ">
                        <img src={delhiimage} className="card-img-top" alt="paris" style={{height:'60%', width:'100%'}}/>
                        <p className="card-title text-center fs-1 fw-bold">Delhi</p>
                        <p className="fs-4">
                        Delhi is a unique place to every other city world over. First time travelers might get a sensory overload with the pollution, chaos, exotic cuisine, rich culture, colors, shopping marketplaces, history and architecture. There is so much to explore in this alluring city unlike any other that attracts so many tourists from around the world every year. 
                        </p>
                        <p className="card-title text-center fs-1 fw-bold">Why Visit Delhi?</p>
                        <p className="fs-4">
                        Delhi is the place where you can find both rich ancient heritage that perfectly blends with the present modern times. There are fascinating historical monuments and structures that are known for amazing architecture that showcase the rich heritage of India.
                        Delhi is synonymous with the tall minaret called Qutub Minar, the India Gate for the homage, one of the oldest and biggest masjids - Jama Masjid, the famous Red Fort, and the list keeps adding on. In addition to the ancient architectural structures, there are also the well   appointed places such as gardens, museums, the metro system, modern temples such as the Bahai Lotus Temple, etc.      
                        </p>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="row main-landing-content-card-image-margin">
                        <div className="col-12 text-center"><p className="fs-1 fw-bold">Best Hotels</p></div>
                        {cityobject.del.map(newsdata =>
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
export default Delhicomponent;