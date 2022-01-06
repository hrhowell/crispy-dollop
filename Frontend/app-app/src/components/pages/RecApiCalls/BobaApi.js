import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css'

export const BobaIng = ()=> {

   

    const [bobaIng, setBobaIng] = useState([]);

    const fetchBobaIng = ()=>{
        var recipe = "boba";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
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
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}