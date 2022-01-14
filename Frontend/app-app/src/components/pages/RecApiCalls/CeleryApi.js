import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const CeleryIng = ()=> {

   

    const [celeryIng, setCeleryIng] = useState([]);

    const fetchCeleryIng = ()=>{
        var recipe = "celery_boats"
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
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