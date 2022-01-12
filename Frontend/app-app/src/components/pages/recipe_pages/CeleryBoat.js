import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {CeleryIng} from '../RecApiCalls/CeleryApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";


function CeleryBoat (){
    return(
    <>
    
    <Navbar/>
    <div id="maindiv">
    <img src="images/celery_boats.jpg"/>
  
    <h1>Sweet and Simple Celery Boats</h1>
    <div id="userdiv">
    <p>Crunchy yummy celery-boats are fun for lunchboxes...or just to eat while making them!</p>
    <hr/>
    </div>
    <CeleryIng/>
    <RecipeButton/>
    <EmailButton/>
    </div>
    </>
    )
        

   
} export default CeleryBoat;
