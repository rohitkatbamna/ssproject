import React from "react";
import { Link } from "react-router-dom";
import logomain from '../../assets/luggage.png';
import './navbarforall.css';

function Navbarforall(){
    return(
        <>
        <div className="card navbar-for-all-travel shadow" style={{borderBottomLeftRadius:'16px',borderBottomRightRadius:'16px'}}>
            <div className="card-body">
                <nav class="navbar navbar-expand-lg navbar-light" >
                    <div class="container-fluid">
                        <Link to='/' style={{textDecoration:'none'}}><div class="navbar-brand fw-bold"><img src={logomain} style={{height:'50px'}} alt='MainLogo'/> Good<span style={{color:'red'}}>Stays</span></div></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/' style={{textDecoration:'none'}} ><div className="nav-link">Home</div></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/reviews' style={{textDecoration:'none'}}><div className="nav-link">Reviews</div></Link>
                            </li>
                            <li class="nav-item dropdown">
                                <div class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Destinations
                                </div>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link to='/contactus' style={{textDecoration:'none'}}><div class="nav-link">Contact Us</div></Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search For Destinations..." aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    );
}
export default Navbarforall;