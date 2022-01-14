import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const PancakesIng = ()=> {

   

    const [pancakesIng, setPancakesIng] = useState([]);

    const fetchPancakesIng = ()=>{
        var recipe ="pancakes";
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setPancakesIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPancakesIng();
    }, [] );

    return pancakesIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}