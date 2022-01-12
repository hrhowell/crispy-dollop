import React from 'react';
import Navbar from '../../Navbar';
import '../../../App.css'
import LunchCards from '../../cards/LunchCards';
import LuSearch from '../UtilPages/Search/LuSearch';
import { RecipeButton } from '../../buttons/RecipeButton';

function Lunch() {
    return (
        <>
        <Navbar/>
        <LuSearch/>
        <LunchCards/>
        <RecipeButton/>
        </>
    )
}

export default Lunch
