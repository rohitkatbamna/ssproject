import React from "react";
import Barcelonacomponent from "../components/barsolonacomponent/barsolonacomponent";
import Footer from "../components/footercomponent/footer";
import Navbarforall from "../components/navbarforall/navbarforall";

function Barcelonapage(){
    return(
        <div>
            <Navbarforall />
            <Barcelonacomponent />            
            <Footer />
        </div>
    );
}
export default Barcelonapage;