import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const HamburgerIng = ()=> {

   

    const [hamburgerIng, setHamburgerIng] = useState([]);

    const fetchHamburgerIng = ()=>{
        var recipe = "hamburger";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
            console.log(res);
            setHamburgerIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchHamburgerIng();
    }, [] );

    return hamburgerIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}