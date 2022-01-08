import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { LemonTartIng } from '../RecApiCalls/LemonTartApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function LemonTart (){
    return(
    <>
    <Navbar/>
    <img src="images/lemon_tart.jpg"/>
    <LemonTartIng/>
    <RecipeButton/>
    </>
    )

   
}
export default LemonTart;
