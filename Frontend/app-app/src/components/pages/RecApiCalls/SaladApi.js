import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css';


export const SaladIng = ()=> {

   

    const [saladIng, setSaladIng] = useState([]);

    const fetchSaladIng = ()=>{
        var recipe ="salad";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
            console.log(res);
            setSaladIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchSaladIng();
    }, [] );

    return saladIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}