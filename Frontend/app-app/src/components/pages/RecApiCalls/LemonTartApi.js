import axios from "axios";
import React, {useState, useEffect, useCallback}from "react";
import '../utilpages/UserProfiles.css';;

 export const LemonTartIng = ()=> {

   

    const [lemonTartIng, setLemonTartIng] = useState([]);

    const fetchLemonTartIng = ()=>{
        var recipe = "lemon_tart";
        axios.get(`http://localhost:9090/api/v1/ingredients/recipes/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
            console.log(res);
            setLemonTartIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchLemonTartIng();
    }, [] );

    return lemonTartIng.map((ingredient, index) =>{
        return (
            <div key={index}>
               <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}