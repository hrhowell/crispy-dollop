import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {CeleryIng} from '../RecApiCalls/CeleryApi';
import { SnackButton } from "../../buttons/SnackButton";
import { EmailButton } from "../../buttons/EmailRecipe";
import { ShoppingListButton } from "../../buttons/ShoppingListButton";


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
    <SnackButton/>
    <EmailButton/>
    <ShoppingListButton/>
    <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
    </div>
    </>
    )
        

   
} export default CeleryBoat;
