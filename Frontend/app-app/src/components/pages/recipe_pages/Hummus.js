import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { HummusIng } from '../RecApiCalls/HummusApi';

function Hummus (){
    return(
    <>
    <Navbar/>
    <HummusIng/>
    </>
    )
        

    
}
export default Hummus;
