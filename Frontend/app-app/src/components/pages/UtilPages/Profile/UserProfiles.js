import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import {useDropzone} from 'react-dropzone'
import './UserProfiles.css'

export const UserProfiles = ()=> {

   

    const [userProfiles, setUserProfiles] = useState([]);

    const fetchUserProfiles = ()=>{
        axios.get("http://localhost:9090/api/v1/users").then(res =>{
            console.log(res);
            setUserProfiles(res.data);
        });
        

    }

    useEffect(()=>{
        fetchUserProfiles();
    }, [] );

    return userProfiles.map((user, index) =>{
        return (
            <div  key={index}>
                {user.userID ? (
                    <img 
                        src={`http://localhost:9090/api/v1/users/${user.userID}/image/download`}
                    />
                ):null}
               <br/>
               <br/>
              
               <h1>{user.firstname} {user.lastname}</h1>
               <div id="userdiv">
                <p>User ID: {user.userID}</p>
                <p>Email: {user.email}</p>
                <p>Favorite Recipe: {user.fav_rec}</p>
                <Dropzone {...user}/>
                </div>
                <br/>
               
            </div>
        )
    }); 

    function Dropzone({userID}) {
        const onDrop = useCallback(acceptedFiles => {
          const file = acceptedFiles[0];

          console.log(userID);
          console.log(file);

          const formData = new FormData();
          formData.append("file", file);

          axios.post(`http://localhost:9090/api/v1/users/${userID}/image/upload`, 
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
                <p>✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ 　✼　 ҉ </p>
            }
          </div>
        )
    }
}