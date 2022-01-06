import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {PancakesIng} from '../RecApiCalls/PancakesApi';


function Pancakes (){
    return(
    <>
    <Navbar/>

    <PancakesIng/>
    </>
    )
        

   
}
export default Pancakes;
