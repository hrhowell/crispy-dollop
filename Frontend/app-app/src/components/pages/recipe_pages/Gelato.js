import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import  { GelatoIng } from '../RecApiCalls/GelatoApi';

function Gelato (){
    return(
    <>
    <Navbar/>
    <GelatoIng/>
    </>
    )
        

    
}
export default Gelato;
