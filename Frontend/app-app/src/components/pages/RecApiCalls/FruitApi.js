import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css'

export const FruitIng = ()=> {

   

    const [fruitIng, setFruitIng] = useState([]);

    const fetchFruitIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/snacks/fruit-stars").then(res =>{
            console.log(res);
            setFruitIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchFruitIng();
    }, [] );

    return fruitIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}