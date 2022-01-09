import React from "react";
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import {ToastIng} from '../RecApiCalls/ToastApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Toast () {
    return(
    <>
    <Navbar/>
    <img src="images/toast.jpg"/>
    <br/>
    <br/>
    <ToastIng/>
    <RecipeButton/>
    
    </>
    )
        

    
}

export default Toast;
