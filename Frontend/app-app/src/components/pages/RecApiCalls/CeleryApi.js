import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../utilpages/UserProfiles.css';

export const CeleryIng = ()=> {

   

    const [celeryIng, setCeleryIng] = useState([]);

    const fetchCeleryIng = ()=>{
        var recipe = "celery-boats"
        axios.get(`http://localhost:9090/api/v1/ingredients/recipes/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
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
               <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}