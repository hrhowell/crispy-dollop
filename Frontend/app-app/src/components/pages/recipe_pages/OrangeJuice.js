import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import { OrangeJuiceIng } from '../RecApiCalls/OrangeJuiceApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function OrangeJuice (){
    return(
    <>
    <Navbar/>
    <img src="images/orange_juice.jpg"/>
    <br/>
    <br/>
    <OrangeJuiceIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default OrangeJuice;
