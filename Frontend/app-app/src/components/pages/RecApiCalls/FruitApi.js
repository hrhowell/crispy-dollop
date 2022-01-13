import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const FruitIng = ()=> {

   

    const [fruitIng, setFruitIng] = useState([]);

    const fetchFruitIng = ()=>{
        var recipe = "fruit_stars";
        const username = sessionStorage.getItem('username');
        axios.get(`http://3.14.3.79:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setFruitIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchFruitIng();
    }, [] );

    return fruitIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}