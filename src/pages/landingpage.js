import React from "react";
import Footer from "../components/footercomponent/footer";
import Landingcontentmain from "../components/landingcontent/landingcontent";
import Navbarforall from "../components/navbarforall/navbarforall";

function Landingpage(){
    return(
        <>
        <Navbarforall />
        <Landingcontentmain />
        <Footer />
        </>
    );
}
export default Landingpage;