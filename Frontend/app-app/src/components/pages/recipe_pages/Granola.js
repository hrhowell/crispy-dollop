import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {GranolaIng} from '../RecApiCalls/GranolaApi';

function Granola (){
    return(
    <>
    <Navbar/>
    <GranolaIng/>
    </>
    )
        

    
}
export default Granola;
