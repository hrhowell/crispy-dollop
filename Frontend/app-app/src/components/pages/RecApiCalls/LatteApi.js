import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const LatteIng = ()=> {

   

    const [latteIng, setLatteIng] = useState([]);

    const fetchLatteIng = ()=>{
        var recipe = "latte";
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setLatteIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchLatteIng();
    }, [] );

    return latteIng.map((ingredient, index) =>{
        return (
            <div key={index}>
               <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}