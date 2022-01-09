import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../utilpages/UserProfiles.css';

export const LatteIng = ()=> {

   

    const [latteIng, setLatteIng] = useState([]);

    const fetchLatteIng = ()=>{
        var recipe = "latte";
        axios.get(`http://localhost:9090/api/v1/ingredients/recipes/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
            console.log(res);
            setLatteIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchLatteIng();
    }, [] );

    return LatteIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}