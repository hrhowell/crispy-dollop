import axios from "axios";
import React, {useState, useEffect, useCallback}from "react";
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const HummusIng = ()=> {

   

    const [hummusIng, setHummusIng] = useState([]);

    const fetchHummusIng = ()=>{
        var recipe = "hummus";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
            console.log(res);
            setHummusIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchHummusIng();
    }, [] );

    return hummusIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}