import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';


export const PavlovaIng = ()=> {

   

    const [pavlovaIng, setPavlovaIng] = useState([]);

    const fetchPavlovaIng = ()=>{
        var recipe = "pavlova";
        const username = sessionStorage.getItem('username');
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setPavlovaIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchPavlovaIng();
    }, [] );

    return pavlovaIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}