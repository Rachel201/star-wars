import react from 'react';
import axios from 'axios';
import { api } from '../config';
import { arrayBuffer } from 'node:stream/consumers';

export async function getData(value){
axios.get(api+value).then((response) => {
    return(response.data);
}).catch((err) => {
    console.log(err);
})
}


