import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import  { LatteIng } from '../RecApiCalls/LatteApi';

function Latte (){
    return(
    <>
    <Navbar/>
    <LatteIng/>
    </> 
    )

   
}

export default Latte;
