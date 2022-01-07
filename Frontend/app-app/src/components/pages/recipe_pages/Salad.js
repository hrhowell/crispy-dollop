import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { SaladIng } from '../RecApiCalls/SaladApi';
import { RecipeButton } from "../../RecipeButton";

function Salad (){
    return(
    <>
    <Navbar/>
    <img src="images/salad.jpg"/>
    <SaladIng/>
    <RecipeButton/>
    </>
    )
        

}
export default Salad;
