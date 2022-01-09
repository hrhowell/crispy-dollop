import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../utilpages/UserProfiles.css';

export const GelatoIng = ()=> {

   
  

    
    const [gelatoIng, setGelatoIng] = useState([]);

    const fetchGelatoIng = ()=>{
        var recipe = "black_forest_gelato_with_ganache";
        axios.get(`http://localhost:9090/api/v1/ingredients/recipes/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
            console.log(res);
            setGelatoIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchGelatoIng();
    }, [] );

    return gelatoIng.map((ingredient, index) =>{
        return (
            <div key={index}>
               <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}