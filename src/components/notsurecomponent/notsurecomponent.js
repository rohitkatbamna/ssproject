import React from "react";
import './notsurecomponent.css';
import { Link } from "react-router-dom";

function Notsurecomponent(){
    const ranNumber = Math.floor(Math.random()*7)
    console.log(ranNumber)
    const city =['/paris','/barcelona','/bangkok','/losangeles','/berlin','/mumbai','/delhi']
    const ranCity = city[ranNumber];
    return(
        <div className="not-sure-component-what-all-of-it">
            <div className="container-fluid card shadow not-sure-component-card-con">
                <div className="card-body row">
                    <div className="col-12 text-center">
                        <p className="fs-1 fw-bold" style={{marginTop:'100px'}}>Not sure where to go ? Perfect</p>
                        <Link to={ranCity} ><button type="button" className="btn btn-success btn-lg" style={{marginBottom:'100px'}}>Click Here !</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Notsurecomponent;