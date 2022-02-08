import React from 'react';
import {getMaxPopulation} from './api'

export const Vehicle = ()=>{
     const maxPopulation =getMaxPopulation();
     console.log('Max population',maxPopulation);
    return(
        <h1>{maxPopulation}</h1>
    )
} 