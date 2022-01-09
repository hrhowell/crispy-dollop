import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import  { PadThaiIng } from '../RecApiCalls/PadThaiApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function PadThai(){
    return(
    <>
    <Navbar/>
    <img src="images/pad_thai.jpg"/>
    <br/>
    <br/>
    <PadThaiIng/>
    <RecipeButton/>
    </>
    )
        

}
export default PadThai;
