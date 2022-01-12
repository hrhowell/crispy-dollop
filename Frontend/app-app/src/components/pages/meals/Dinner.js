import React from 'react';
import Navbar from '../../Navbar';
import '../../../App.css';
import DinnerCards from '../../cards/DinnerCards';
import DeSearch from '../UtilPages/Search/DeSearch';
import { RecipeButton } from '../../buttons/RecipeButton';

function Dinner() {
    return (
        <>
        <Navbar/>
        <DeSearch/>
        <DinnerCards/>
        <RecipeButton/>
        </>
    )
}

export default Dinner
