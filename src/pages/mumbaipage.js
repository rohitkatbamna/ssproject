import React from "react";
import Navbarforall from "../components/navbarforall/navbarforall";
import Footer from "../components/footercomponent/footer";
import Mumbaicomponent from "../components/mumbaicomponent/mumbaicomponent";

function Mumbaipage(){
    return(
        <div>
            <Navbarforall />
            <Mumbaicomponent />            
            <Footer />
        </div>
    );
}
export default Mumbaipage;