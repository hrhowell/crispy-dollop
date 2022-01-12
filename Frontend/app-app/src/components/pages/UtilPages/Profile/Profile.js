import React from 'react';
import Navbar from '../../../Navbar';
import '../../../../App.css';
import {ProfileConst} from './ProfileApi';
import './UserProfiles.css'
import '../Recipe/UserRecipes.css'


function Profile() {
    return (
        <>
        <Navbar/>
        <div id="maindiv">
        <ProfileConst/>
        </div>
        </>
    )
}

export default Profile