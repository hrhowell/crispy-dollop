import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {GranolaIng} from '../RecApiCalls/GranolaApi';
import { RecipeButton } from "../../RecipeButton";

function Granola (){
    return(
    <>
    <Navbar/>
    <img src="images/granola.jpg"/>
    <GranolaIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Granola;
