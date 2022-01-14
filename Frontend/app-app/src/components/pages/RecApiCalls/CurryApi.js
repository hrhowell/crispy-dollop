import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const CurryIng = ()=> {

   

    const [curryIng, setCurryIng] = useState([]);

    const fetchCurryIng = ()=>{
        var recipe = "curry";
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setCurryIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchCurryIng();
    }, [] );

    return curryIng.map((ingredient, index) =>{
        return (
            <div key={index}>
               <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}