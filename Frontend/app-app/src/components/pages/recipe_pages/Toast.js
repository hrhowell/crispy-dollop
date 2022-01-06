import React from "react";
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {ToastIng} from '../RecApiCalls/ToastApi';

function Toast () {
    return(
    <>
    <Navbar/>

    <ToastIng/>
    
    </>
    )
        

    
}

export default Toast;
