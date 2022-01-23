import React from "react";
import Bangkokcomponent from "../components/bangkokcomponent/bangkokcomponent";
import Footer from "../components/footercomponent/footer";
import Navbarforall from "../components/navbarforall/navbarforall";

function Bangkokpage(){
    return(
        <div>
            <Navbarforall />
            <Bangkokcomponent />            
            <Footer />
        </div>
    );
}
export default Bangkokpage;