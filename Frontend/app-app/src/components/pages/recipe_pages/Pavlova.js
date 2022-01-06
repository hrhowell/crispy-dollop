import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { PavlovaIng } from '../RecApiCalls/PavolvaApi';

function Pavlova (){
    return(
    <>
    <Navbar/>
    <PavlovaIng/>
    </>
    )
        

    
}export default Pavlova;
