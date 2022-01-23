import React from "react";
import Contactcomponent from "../components/contactcomponent/contactcomponent";
import Footer from "../components/footercomponent/footer";
import Navbarforall from "../components/navbarforall/navbarforall";

function Contactuspage(){
    return(
        <>
        <Navbarforall />
        <Contactcomponent />
        <Footer />
        </>
    );
}
export default Contactuspage;