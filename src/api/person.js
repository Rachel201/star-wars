import react  from 'react';
import {getData} from './data-star-wars';


export async function getPerson(){
    console.log('person')
    const fetchApiData = await getData("people");
    console.log(fetchApiData);
    const count = fetchApiData.count;
    const numResult = fetchApiData.results.length;
    const page = count/numResult;
    console.log("page: "+page.toString());
    
} 