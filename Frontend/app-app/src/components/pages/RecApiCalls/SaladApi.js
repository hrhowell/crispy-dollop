import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css';


export const SaladIng = ()=> {

   

    const [saladIng, setSaladIng] = useState([]);

    const fetchSaladIng = ()=>{
        var recipe ="salad";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
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
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}