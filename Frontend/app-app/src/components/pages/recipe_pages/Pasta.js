import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { PastaIng } from '../RecApiCalls/PastaApi';
import { RecipeButton } from "../../RecipeButton";

function Pasta (){
    return(
    <>
    <Navbar/>
    <img src="images/pasta.jpg"/>
    <PastaIng/>
    <RecipeButton/>
    </>
    )
        

   
}export default Pasta;
