import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { OrangeJuiceIng } from '../RecApiCalls/OrangeJuiceApi';

function OrangeJuice (){
    return(
    <>
    <Navbar/>
    <OrangeJuiceIng/>
    </>
    )
        

    
}
export default OrangeJuice;
