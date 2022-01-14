import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';


export const PadThaiIng = ()=> {

   

    const [padThaiIng, setPadThaiIng] = useState([]);

    const fetchPadThaiIng = ()=>{
        var recipe ="pad_thai";
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setPadThaiIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPadThaiIng();
    }, [] );

    return padThaiIng.map((ingredient, index) =>{
        return (
            <div key={index}>
               <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}