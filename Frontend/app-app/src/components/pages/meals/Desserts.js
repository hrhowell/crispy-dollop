import React from 'react';
import Navbar from '../../Navbar';
import '../../../App.css'
import DessertsCards from '../../cards/DessertsCards';
import DeesSearch from '../UtilPages/Search/DeesSearch';
import { RecipeButton } from '../../buttons/RecipeButton';

function Desserts() {
    return (
        <>
        <Navbar/>
        <DeesSearch/>
        <DessertsCards/>
        <RecipeButton/>
        </>
    )
}

export default Desserts
