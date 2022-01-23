import React from "react";
import './contactcomponent.css';

function Contactcomponent(){
    return(
        <div className="contact-component-all-of-it-margin-change">
            <div className="card container-fluid shadow">
                <div className="card-body row">
                    <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-8 ms-auto me-auto">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-bold fs-3">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label fw-bold fs-3">Your Query</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contactcomponent;