import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import { LemonTartIng } from '../RecApiCalls/LemonTartApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function LemonTart (){
    return(
    <>
    <Navbar/>
    <img src="images/lemon_tart.jpg"/>
    <br/>
    <br/>
    <LemonTartIng/>
    <RecipeButton/>
    </>
    )

   
}
export default LemonTart;
