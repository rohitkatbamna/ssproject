import React from "react";
import './footer.css';

function Footer(){
    return(
        <div className="footer-main-all-of-it-change-margin">
            <div className="card container-fluid shadow">
                <div className="card-body row">
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 text-left fs-4" style={{cursor:'pointer'}}>
                        <p className="fw-bold">Support</p>
                        <p>Help Centre</p>
                        <p>Safety information</p>
                        <p>Cancellation options</p>
                        <p>Our COVID-19 Response</p>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 text-left fs-4" style={{cursor:'pointer'}}>
                        <p className="fw-bold">Terms and Policies</p>
                        <p>Privacy policy</p>
                        <p>Terms of use</p>
                        <p>Accessibility</p>
                        <p>Do not sell my personal information</p>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 text-left fs-4" style={{cursor:'pointer'}}>
                        <p className="fw-bold">Company</p>
                        <p>About</p>
                        <p>List your property</p>
                        <p>Partnerships</p>
                        <p>Advertising</p>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 text-left fs-4" style={{cursor:'pointer'}}>
                        <p className="fw-bold">Explore</p>
                        <p>All accommodation types</p>
                        <p>International travel documents</p>
                        <p>Investors</p>
                        <p>Newsroom</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Footer;