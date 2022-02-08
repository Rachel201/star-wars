import {getDataVehicles} from "../api/data-vehicles-star-wars";

export const getMaxPopulation =async ()=>{
    let arrayVehicles;
    const dataVehicles = await getDataVehicles();
    console.log("dataVehicles: ",dataVehicles);
    dataVehicles.map(vehicle=>{
       arrayVehicles[vehicle.numVehicle] += vehicle.population
    }) ;
    arrayVehicles = arrayVehicles.filter(item => (item ?? false) !== false)
    //const i  = arrayVehicles.indexOf(Math.max(...arrayVehicles));
//   const maxPopulations=(xs,key)=>{
// return xs.reduce(function(rv,x){
//     (rv)
// })
//   }
const groupBy = (arrayVehicles, key) => arrayVehicles.reduce(
    (result,vehicles ) => ({
      ...result,
      [vehicles[key]]: [
        ...(result[vehicles[key]] || []),
        vehicles,
      ],
    }), 
    {},
  );
console.log("groupBy",groupBy);

    return 10;
}
