import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { PavlovaIng } from '../RecApiCalls/PavolvaApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Pavlova (){
    return(
    <>
    <Navbar/>
    <img src="images/pavlova.jpg"/>
    <PavlovaIng/>
    <RecipeButton/>
    </>
    )
        

    
}export default Pavlova;
