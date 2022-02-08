import react from 'react';
import { getData } from '../api/data-star-wars';
import {getPilots }from '../api/data-people-star-wars'

export const getDataVehicles = async () => {
    let arryVehiclesPopulation = [];
    const dataPilot = await getPilots();
    return await dataPilot.map(async (data) => {
        data.map(async pilotAndVehicles=>{
        const urlPilot =  pilotAndVehicles.homeworld.substr(pilotAndVehicles.homeworld.length-11);
         const namePilot = pilotAndVehicles.name;
        const getDatePilot = await getData(urlPilot).then()
        const opjPilot = {namePilot,getDatePilot}
        pilotAndVehicles.vehicles.map(async vehicle=>{
        const numvehicles = vehicle.substr(vehicle.length-3,2);
        if(getDatePilot.population!="unknown"){
                const dataMap ={
                    numVehicle:numvehicles,
                    planet:getDatePilot.name,
                    population:Number(getDatePilot.population),
                    namePilot:namePilot,  
                }
                arryVehiclesPopulation = [...arryVehiclesPopulation,dataMap];
        }   
      });
    });
  });        
  // console.log("arryVehiclesPopulation: ",arryVehiclesPopulation)
 
}

