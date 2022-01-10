import React from 'react'
import './UserRecipes.css';

import '../../../../App.css';


import Navbar from '../../../Navbar';

import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate} from 'react-router-dom';

export default function UserRecipes() {
    // const [user, setUser] = useState([]);
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
    axios.get(`http://localhost:9090/api/v1/recipes/users/all-recipes`).then(res => {
        const recipes = res.data;
        console.log(recipes)
        setRecipes(recipes);
    });
    }, []);
    return(
        <>
          <Navbar/>
          <p id="pid">User Recipes</p> 
          <div id="everyThing">
          {/* <p>User Recipes</p>  */}
          <table className='bigTeble'>
            <thead>
                <tr className='headerRow'>
                    <td className='headerCol'>
                        ID
                    </td>
                    <td className='headerCol'>
                        Recipe Name
                    </td>
                    <td className='headerCol'>
                        Meal Type
                    </td>
                    <td className='headerCol'>
                        First Ingredient
                    </td>
                    <td className='headerCol'>
                        Second Ingredient
                    </td>
                    <td className='headerCol'>
                        Third Ingredient
                    </td>
                    <td className='headerCol'>
                        Fourth Ingredient
                    </td>
                    <td className='headerCol'>
                        Fifth Ingredient
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                </tr>
            </tbody>
          </table>
             
          </div>
          
        </>
    );
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// export default function Users(){
//     const [user, setUser] = useState([]);

//     useEffect(() => {
//         axios.get(`http://localhost:8080/jpa/users`).then(res => {
//           const user = res.data;
//           console.log(user)
//             setUser(user);
//         });
//       }, []);

//     return (
//         <>
//         <h2>Users</h2>
//         <ul>
//         {user.map(u => (
//           <li key={u.id}>
//             {u.name}, {u.birthDate},{" "} 
//             <ol>
//             {u.posts.map(
//                 p=>(
//                     <li key={p.id}>{p.description}</li>
//                 )
//             )}
//     </ol>
//           </li>
//         ))}
//         </ul>
//         </>
//     )
// }