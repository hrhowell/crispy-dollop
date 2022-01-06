import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css';

export const PastaIng = ()=> {

   

    const [pastaIng, setPastaIng] = useState([]);

    const fetchPastaIng = ()=>{
        var recipe ="pasta";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
            console.log(res);
            setPastaIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPastaIng();
    }, [] );

    return pastaIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}