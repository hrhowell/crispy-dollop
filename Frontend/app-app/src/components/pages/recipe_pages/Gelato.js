import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import  { GelatoIng } from '../RecApiCalls/GelatoApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Gelato (){
    return(
    <>
    <Navbar/>
    <img src="images/gelato.jpg"/>
    <br/>
    <br/>
    <GelatoIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Gelato;
