import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../utilpages/UserProfiles.css';

export const PunchIng = ()=> {

   

    const [punchIng, setPunchIng] = useState([]);

    const fetchPunchIng = ()=>{
        var recipe = "punch";
        axios.get(`http://localhost:9090/api/v1/ingredients/recipes/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
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
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}