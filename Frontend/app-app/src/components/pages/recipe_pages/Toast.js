import React from "react";
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {ToastIng} from '../RecApiCalls/ToastApi';
import { RecipeButton } from "../../buttons/RecipeButton";

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
