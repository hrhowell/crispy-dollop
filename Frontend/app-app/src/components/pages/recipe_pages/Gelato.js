import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import  { GelatoIng } from '../RecApiCalls/GelatoApi';
import { DessertButton } from "../../buttons/DessertButton";
import { EmailButton } from "../../buttons/EmailRecipe";
import { ShoppingListButton } from "../../buttons/ShoppingListButton";

function Gelato (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/gelato.jpg"/>
    
    <h1>Black Forest Gelato with Ganache</h1>
    <div id="userdiv">
    <p>Chocolate is the new black. Make your decadent get-away with layers of depth in creamy gelato and midnight pools of molten ganache.</p>
    <hr/>
    </div>
    <GelatoIng/>
    <DessertButton/>
    <EmailButton/>
    <ShoppingListButton/>
    <br/>
     <br/>
     <br/>
     <br/>
     <br/>
    </div>
    </>
    )
        

    
}
export default Gelato;
