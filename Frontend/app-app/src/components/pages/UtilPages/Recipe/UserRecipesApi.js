import axios from "axios";
import React, {useState, useEffect, useCallback}from "react";
// import {useDropzone} from 'react-dropzone';
import '../Profile/UserProfiles.css';


export const ApprovedRecipes = ()=> {

    const [userRecipes, setUserRecipes] = useState([]);

    const fetchUserRecipes = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/users/approved").then(res =>{ //http://3.14.3.79:9090/api/v1/users
            console.log(res.data);
            setUserRecipes(res.data);
        });
        

    }

    useEffect(()=>{
        fetchUserRecipes();
    }, [] );

    return userRecipes.map((recipe, index) =>{
        
        return (
            <>
            
            <div  key={index}>
                {/* {user.userID ? (
                    <img 
                        src={`http://localhost:9090/api/v1/users/${user.userID}/image/download`} //http://3.14.3.79:9090/api/v1/users
                    />
                ):null} */}
               <br/>
               <br/>
               
                <h1>{recipe.recName}</h1>
                <div id="userdiv">
                <p>Ingredient 1: {recipe.ing1}</p>
                <p>Ingredient 2: {recipe.ing2}</p>
                <p>Ingredient 3: {recipe.ing3}</p>
                <p>Ingredient 4: {recipe.ing4}</p>
                <p>Ingredient 5: {recipe.ing5}</p>
                <p>✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ </p>
                
                {/* <Dropzone {...user}/> */}
                </div>
            </div>
            </>
        )
    }); 

    // function Dropzone({userID}) {
    //     const onDrop = useCallback(acceptedFiles => {
    //       const file = acceptedFiles[0];

    //       console.log(userID);
    //       console.log(file);

    //       const formData = new FormData();
    //       formData.append("file", file);

    //       axios.post(`http://localhost:9090/api/v1/users/${userID}/image/upload`, //http://3.14.3.79:9090/api/v1/users
    //             formData, 
    //                 {
    //                     headers: {
    //                      "Content-Type": "image/*"
    //                     }
    //                 }  
    //             ).then(()=>{
    //                      console.log("file uploaded successfully")
    //                  }
    //             ).catch(err =>{
    //                      console.log(err);
    //                       })


    //     }, [])
    //     const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      
    //     return (
    //       <div {...getRootProps()}>
    //         <input {...getInputProps()} />
    //         {
    //           isDragActive ?
    //             <p>Drop the image here ...</p> :
    //             <p>Drag 'n' drop a profile picture here, or click to select a profile picture</p>
    //         }
    //       </div>
    //     )
    // }
}