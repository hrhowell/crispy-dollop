import React from "react";
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {ToastIng} from '../RecApiCalls/ToastApi';
import { RecipeButton } from "../../RecipeButton";

function Toast () {
    return(
    <>
    <Navbar/>
    <img src="images/toast.jpg"/>
    <ToastIng/>
    <RecipeButton/>
    
    </>
    )
        

    
}

export default Toast;
