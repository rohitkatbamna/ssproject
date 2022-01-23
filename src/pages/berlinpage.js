import React from "react";
import Navbarforall from "../components/navbarforall/navbarforall";
import Footer from "../components/footercomponent/footer";
import Berlincomponent from "../components/berlincomponent/berlincomponent";

function Berlinpage(){
    return(
        <div>
            <Navbarforall />
            <Berlincomponent />            
            <Footer />
        </div>
    );
}
export default Berlinpage;