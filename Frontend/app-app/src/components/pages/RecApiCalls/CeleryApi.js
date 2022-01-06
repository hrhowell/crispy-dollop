import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css'

export const CeleryIng = ()=> {

   

    const [celeryIng, setCeleryIng] = useState([]);

    const fetchCeleryIng = ()=>{
        var recipe = "celery-boats"
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
            console.log(res);
            setCeleryIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchCeleryIng();
    }, [] );

    return celeryIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}