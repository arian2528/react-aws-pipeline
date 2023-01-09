import houses from './houses.json'

interface House { name: string, planets: string | string[] }
interface HouseWithId { id: number, name: string, planets: string | string[] }

function findHouses(house: string): HouseWithId[];
function findHouses(house: string, filter: (house: House) => boolean): HouseWithId[];
function findHouses(houses: House[]): HouseWithId[];
function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithId[];
function findHouses(input: string | House[], filter?: (house: House) => boolean): HouseWithId[] {
    // I need an array of houses. Because based on the implementation I'll get either a JSON string or an array 
    let houses = [] as House[];
    let filteredHouses: House[] = [];
    
    if (typeof input === 'string') {
        houses = JSON.parse(input);
    } else {
        houses = input;
        filteredHouses = input;
    }

    if (filter) {
        filteredHouses = houses.filter(filter)
    }

    return filteredHouses.map(house => ({id: houses.indexOf(house), ...house}))
    
}

console.log(findHouses(JSON.stringify(houses), ({name}) => name === 'Atreides'));
console.log(findHouses(houses, ({name}) => name === 'Harkonnen'));