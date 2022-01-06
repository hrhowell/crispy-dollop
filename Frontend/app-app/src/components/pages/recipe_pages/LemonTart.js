import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { LemonTartIng } from '../RecApiCalls/LemonTartApi';

function LemonTart (){
    return(
    <>
    <Navbar/>
    <LemonTartIng/>
    </>
    )

   
}
export default LemonTart;
