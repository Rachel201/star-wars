import react from 'react';
import axios from 'axios';
import { api } from '../config';
import { checkHttpStatus} from '../utils/index';


export async function getData(value){
  const response = await axios.get(api+value)
  .then(checkHttpStatus) 
  .catch(err => {
    console.log("Eror receiving data ",err)
  })
  return response.data
}

