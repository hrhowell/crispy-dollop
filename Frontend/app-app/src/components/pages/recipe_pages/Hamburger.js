import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { HamburgerIng } from '../RecApiCalls/HamburgerApi';

function Hamburger (){
    return(
    <>
    <Navbar/>
    <HamburgerIng/>
    </>
    )
        

    
}
export default Hamburger;
