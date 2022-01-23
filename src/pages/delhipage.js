import React from "react";
import Navbarforall from "../components/navbarforall/navbarforall";
import Footer from "../components/footercomponent/footer";
import Delhicomponent from "../components/delhicomponent/delhicomponent";

function Delhipage(){
    return(
        <div>
            <Navbarforall />
            <Delhicomponent />            
            <Footer />
        </div>
    );
}
export default Delhipage;