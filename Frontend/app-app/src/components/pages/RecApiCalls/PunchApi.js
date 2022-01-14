import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const PunchIng = ()=> {

   

    const [punchIng, setPunchIng] = useState([]);

    const fetchPunchIng = ()=>{
        var recipe = "punch";
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
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