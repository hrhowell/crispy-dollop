import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { PastaIng } from '../RecApiCalls/PastaApi';

function Pasta (){
    return(
    <>
    <Navbar/>
    <PastaIng/>
    </>
    )
        

   
}export default Pasta;
