import axios from "axios";
import React, {useState, useEffect, useCallback}from "react";
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const GranolaIng = ()=> {

   

    const [granolaIng, setGranolaIng] = useState([]);

    const fetchGranolaIng = ()=>{
        var recipe ="granola";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
            console.log(res);
            setGranolaIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchGranolaIng();
    }, [] );

    return granolaIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}