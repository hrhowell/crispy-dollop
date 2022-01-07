import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {CeleryIng} from '../RecApiCalls/CeleryApi';
import { RecipeButton } from "../../RecipeButton";

function CeleryBoat (){
    return(
    <>
    <img src='images/celery.jpg'/>
    <Navbar/>
    <img src="images/celery.jpg"/>
    <CeleryIng/>
    <RecipeButton/>
    </>
    )
        

   
} export default CeleryBoat;
