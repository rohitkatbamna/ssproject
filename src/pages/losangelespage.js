import React from "react";
import Navbarforall from "../components/navbarforall/navbarforall";
import Footer from "../components/footercomponent/footer";
import Losangelescomponent from "../components/losangelescomponent/losangelescomponent";

function Losangelespage(){
    return(
        <div>
            <Navbarforall />
            <Losangelescomponent />            
            <Footer />
        </div>
    );
}
export default Losangelespage;