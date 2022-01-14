import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { PavlovaIng } from '../RecApiCalls/PavolvaApi';
import { DessertButton } from "../../buttons/DessertButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Pavlova (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/pavlova.jpg"/>
    
    <h1>Pretty Pavlova</h1>
    <div id="userdiv">
    <p>Crunchy clouds and drizzles of raspberry preserves. Sweeten up after meal time with a dollop of cream on top!</p>
    <hr/>
    </div>
    <PavlovaIng/>
    <DessertButton/>
    <EmailButton/>
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
        

    
}export default Pavlova;
