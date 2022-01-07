import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { OrangeJuiceIng } from '../RecApiCalls/OrangeJuiceApi';
import { RecipeButton } from "../../RecipeButton";

function OrangeJuice (){
    return(
    <>
    <Navbar/>
    <img src="images/orange_juice.jpg"/>
    <OrangeJuiceIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default OrangeJuice;
