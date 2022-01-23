import React from "react";
import './barsolonacomponent.css';
import barsolonaimage from '../../assets/barcelona.jpg';
import cityobject from "../../assets/places";

function Barcelonacomponent(){
    React.useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    return(
        <div className="barsolona-component-all-of-it-change-margin">
            <div className="card shadow container-fluid">
                <div className="card-body">
                    <div>
                    <div className="col-12 ">
                        <img src={barsolonaimage} className="card-img-top" alt="paris" style={{height:'60%', width:'100%'}}/>
                        <p className="card-title text-center fs-1 fw-bold">Barcelona</p>
                        <p className="fs-4">
                        We love Barcelona, that’s for sure. It’s a feeling that can’t be explained; we could give you reasons, even from the top of our heads to come visit Barcelona (we’re about to do it, actually) but they are cold facts. To fall in love with Barcelona you need to come and feel it, meet its people, live its streets and get the local vibe. To live like a Barcelonese, you only need to relax and enjoy little things, from trendy exhibitions, cold beers and folkloric festivals.
                        </p>
                        <p className="card-title text-center fs-1 fw-bold">Why Visit Barcelona?</p>
                        <p className="fs-4">
                        One of the best things about Spain is that it has a very rich and diverse culture. Each region has their own traditions which make them unique in the country and in the world. Catalan habits are very rooted, and locals feel very proud about them. Catalans have their own language, the Catalan idiom, which has led to the development of a literature, art and traditions, movies, theatre plays, music bands, clowns, poetry slams and so many more. The best way to know and feel them all is coming to Barcelona.
                        </p>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="row main-landing-content-card-image-margin">
                        <div className="col-12 text-center"><p className="fs-1 fw-bold">Best Hotels</p></div>
                        {cityobject.bar.map(newsdata =>
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
export default Barcelonacomponent;