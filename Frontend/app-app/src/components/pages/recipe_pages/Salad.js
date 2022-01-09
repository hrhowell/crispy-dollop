import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import { SaladIng } from '../RecApiCalls/SaladApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Salad (){
    return(
    <>
    <Navbar/>
    <img src="images/salad.jpg"/>
    <br/>
    <br/>
    <SaladIng/>
    <RecipeButton/>
    </>
    )
        

}
export default Salad;
