import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {CurryIng} from '../RecApiCalls/CurryApi';

function Curry (){
    return(
    <>
    <Navbar/>
     <CurryIng/>   
    </>
    )
    
}export default Curry;
