import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { SaladIng } from '../RecApiCalls/SaladApi';

function Salad (){
    return(
    <>
    <Navbar/>
    <SaladIng/>
    </>
    )
        

}
export default Salad;
