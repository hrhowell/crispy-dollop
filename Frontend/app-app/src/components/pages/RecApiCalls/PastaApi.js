import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const PastaIng = ()=> {

   

    const [pastaIng, setPastaIng] = useState([]);

    const fetchPastaIng = ()=>{
        var recipe ="pasta";
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setPastaIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPastaIng();
    }, [] );

    return pastaIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}