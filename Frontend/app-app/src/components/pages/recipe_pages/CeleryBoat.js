import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {CeleryIng} from '../RecApiCalls/CeleryApi';

function CeleryBoat (){
    return(
    <>
    <img src='images/celery.jpg'/>
    <Navbar/>
    <CeleryIng/>
    </>
    )
        

   
} export default CeleryBoat;
