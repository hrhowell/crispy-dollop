import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { PunchIng } from '../RecApiCalls/PunchApi';

function Punch (){
    return(
    <>
    <Navbar/>
    <PunchIng/>
    </>
    )
        

   
}
export default Punch;
