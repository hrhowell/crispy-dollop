import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css';

export const PunchIng = ()=> {

   

    const [punchIng, setPunchIng] = useState([]);

    const fetchPunchIng = ()=>{
        var recipe = "punch";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
            console.log(res);
            setPunchIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPunchIng();
    }, [] );

    return punchIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}