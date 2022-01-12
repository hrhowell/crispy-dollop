import axios from "axios";
import React, {useState, useEffect, useCallback}from "react";
import {useDropzone} from 'react-dropzone';
import '../../UtilPages/Profile/ProfileApi';

/**********************************WorksCited******************************************
 * Title: NA
 * Author: Jeremy Zhu
 * Date: 1/9/22
 * Code Verion: React
 * Availability: NA
 **************************************************************************************/

export const ProfileConst = ()=> {
   
    const [userProfile, setUserProfile] = useState([]);

    const fetchUserProfile= ()=>{
        const username = sessionStorage.getItem('username')
      
        axios.get(`http://localhost:9090/api/v1/users/${username}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
            console.log(res);
            setUserProfile(res.data);
        });
    }

console.log(userProfile);
    useEffect(()=>{
        fetchUserProfile();
    }, [] );

    return( 
        <>
      
           
           <div key={userProfile.userID}>
           {userProfile.userID ? (
               <img 
                   src={`http://localhost:9090/api/v1/users/${userProfile.userID}/image/download`} //http://3.14.3.79:9090/api/v1/users
                 />
           ):null}
          <br/>
          <br/>
           <h1>{userProfile.firstname} {userProfile.lastname}</h1>
           <div id="userdiv">
           <p>User ID: {userProfile.userID}</p>
           <p>Email: {userProfile.username}</p>
           <p>Email: {userProfile.email}</p>
           <p>Favorite Recipe: {userProfile.fav_rec}</p>
           <Dropzone {...userProfile}/>
           </div>
           <br/>
           
       </div>

       
        
            
        </>
     )


    function Dropzone({userID}) {
        const onDrop = useCallback(acceptedFiles => {
          const file = acceptedFiles[0];

          console.log(userID);
          console.log(file);

          const formData = new FormData();
          formData.append("file", file);

          axios.post(`http://localhost:9090/api/v1/users/${userID}/image/upload`, //http://3.14.3.79:9090/api/v1/users
                formData, 
                    {
                        headers: {
                         "Content-Type": "image/*"
                        }
                    }  
                ).then(()=>{
                         console.log("file uploaded successfully")
                     }
                ).catch(err =>{
                         console.log(err);
                          })
                          
                          setTimeout(function() {(window.location.reload(true))}, 1500);     
        }, [])
        
        
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      
        return (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the image here ...</p> :
                <p>Drag 'n' drop a profile picture here, or click to select a profile picture</p>
            }

            
          </div>
        )
    }
}