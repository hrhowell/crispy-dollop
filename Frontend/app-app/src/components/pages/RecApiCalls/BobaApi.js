import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const BobaIng = ()=> {

   

    const [bobaIng, setBobaIng] = useState([]);

    const fetchBobaIng = ()=>{
        var recipe = "boba_tea";
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setBobaIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchBobaIng();
    }, [] );

    return bobaIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}