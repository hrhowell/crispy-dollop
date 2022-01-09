import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import {CeleryIng} from '../RecApiCalls/CeleryApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function CeleryBoat (){
    return(
    <>
    
    <Navbar/>
    <img src="images/celery.jpg"/>
    <br/>
    <br/>
    <CeleryIng/>
    <RecipeButton/>
    </>
    )
        

   
} export default CeleryBoat;
