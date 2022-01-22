import { faArrowCircleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './landingcontent.css';

function Landingcontentmain(){
    return(
        <div className="card shadow landing-content-main-all-of-it" style={{marginLeft:'50px',marginRight:'50px',marginTop:'25px'}} >
            <div className="card-body container-fluid "> 
                <div className="row" style={{marginTop:'100px'}}>
                    <div className="col-5 ms-auto me-auto text-center">
                        <h1 className="fw-bold landing-content-main-world-wide">
                            Life is Short And the World is Wide 
                        </h1>
                        <p style={{fontWeight:'600'}}>
                            To get the best of adventure you just need to leave and go where you like. We are waiting for you
                        </p>
                        <button type="button" className="btn btn-lg" style={{backgroundColor:'#935B4F',borderRadius:'26px',color:'white',fontWeight:'600'}}>Plan A Trip <FontAwesomeIcon icon={faArrowCircleRight}/></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 ms-auto me-auto mt-5">
                        <div className="input-group mb-3" style={{height:'70px'}}>
                            <input type="text" className="form-control" placeholder="Location" aria-label="Recipient's username" aria-describedby="button-addon2" style={{borderRadius:'16px'}}/>
                            <input type="date" className="form-control" placeholder="Date" aria-label="Date" aria-describedby="button-addon2" style={{borderRadius:'16px'}} />
                            <button className="btn btn-danger" type="button" id="button-addon2" style={{borderRadius:'46px',width:'60px'}}><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landingcontentmain;