import { getData } from '../api/data-star-wars';

export const getPilots = async () => {
    
    const fetchApiData = await getData("people");
    const count = fetchApiData.count;
    const numResult = fetchApiData.results.length;
    const page = Math.ceil(count / numResult);
    const pageUrl=  Array.from(Array(page).keys())
    pageUrl[0]=page;

    const optionPage = pageUrl.map(async index =>{
            const getDatePilotAndCar = await getData("/people?page=" + index) 
            return getDatePilotAndCar.results;  
    });
    const options = await Promise.all(optionPage)

    return options;
}