import { faArrowCircleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './landingcontent.css';


import Notsurecomponent from "../notsurecomponent/notsurecomponent";

function Landingcontentmain(){        
    return(
        <div>        
            <div className="card shadow landing-content-main-all-of-it">
                <div className="card-body container-fluid "> 
                    <div className="row" style={{marginTop:'100px'}}>
                        <div className="col-xl-6 col-xxl-6 col-lg-7 col-md-9 ms-auto me-auto text-center">
                            <h1 className="fw-bold landing-content-main-world-wide">
                                Life is Short And the World is Wide 
                            </h1>
                            <p style={{fontWeight:'600'}}>
                                To get the best of adventure you just need to leave and go where you like. We are waiting for you
                            </p>
                            <button type="button" className="btn btn-lg" style={{backgroundColor:'#935B4F',borderRadius:'26px',color:'white',fontWeight:'600'}}>Plan A Trip <FontAwesomeIcon icon={faArrowCircleDown}/></button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="d-flex align-items-center flex-wrap justify-content-center">
                                <input type='text' placeholder="Visit Place" style={{height:'50px',borderRadius:'16px',border:'none'}}/>
                                <p className="fw-bold fs-3 mt-3 ms-3 me-3">Check In</p>
                                <input type='date' style={{height:'50px',borderRadius:'16px',border:'none'}}/>
                                <p className="fw-bold fs-3 mt-3 ms-3 me-3">Check Out</p>
                                <input type='date' style={{height:'50px',borderRadius:'16px',border:'none'}}/>
                                <button type="button" class="btn btn-secondary btn-lg" style={{borderRadius:'16px'}}><FontAwesomeIcon icon={faSearch} /></button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <Notsurecomponent />
        </div>
    );
}
export default Landingcontentmain;