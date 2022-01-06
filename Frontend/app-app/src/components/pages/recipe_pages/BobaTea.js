import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {BobaIng}from '../RecApiCalls/BobaApi';

function BobaTea (){
    return(
    <>
    <Navbar/>
    <BobaIng/>
    </>
    )
        

    
}export default BobaTea;
