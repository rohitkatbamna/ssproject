import React from "react";
import Navbarforall from "../components/navbarforall/navbarforall";
import Reviewscomponents from "../components/reviewscomponent/reviewscomponents";
import Footer from "../components/footercomponent/footer";

function Reviewspage(){
    return(
        <div>
            <Navbarforall />
            <Reviewscomponents />
            <Footer />
        </div>
    );
}
export default Reviewspage;
