import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import  { PadThaiIng } from '../RecApiCalls/PadThaiApi';
import { RecipeButton } from "../../RecipeButton";

function PadThai(){
    return(
    <>
    <Navbar/>
    <img src="images/pad_thai.jpg"/>
    <PadThaiIng/>
    <RecipeButton/>
    </>
    )
        

}
export default PadThai;
