import React from "react";
import Footer from "../components/footercomponent/footer";
import Navbarforall from "../components/navbarforall/navbarforall";
import Pariscomponent from "../components/pariscomponent/pariscomponent";

function Parispage(){
    return(
        <div>
            <Navbarforall />
            <Pariscomponent />            
            <Footer />
        </div>
    );
}
export default Parispage;