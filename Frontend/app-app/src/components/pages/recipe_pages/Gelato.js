import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import  { GelatoIng } from '../RecApiCalls/GelatoApi';
import { RecipeButton } from "../../RecipeButton";

function Gelato (){
    return(
    <>
    <Navbar/>
    <img src="images/gelato.jpg"/>
    <GelatoIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Gelato;
