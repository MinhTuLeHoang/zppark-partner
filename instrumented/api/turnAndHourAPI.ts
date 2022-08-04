// import apiData from "../../public/data/Single01.json";


// API[index] (singlo01)
/////////////////////////////////////////
// "vehicle_type": "BIKE",
// "fee_type": "FIXED",
// "turn_count": 313,
// "hours_served": 619.9339


// GRAPH DATA
/////////////////////////////////////////
// options.series = [12, 13, 16]
// options.labels = ["name1", "name2", "name3"]

const listOfTypeAPI = (apiData:any) => {
    const len = apiData.length;
    let typeList:any = [];
    for(let i = 0; i < len; i++) {
        if(typeList.indexOf(apiData[i].fee_type) == -1) {
            typeList.push(apiData[i].fee_type);
        }
    }
    return typeList;
}

const numOfTypeAPI = (apiData:any) => {
    const len = apiData.length;
    let typeList:any = [];
    for(let i = 0; i < len; i++) {
        if(typeList.indexOf(apiData[i].fee_type) == -1) {
            typeList.push(apiData[i].fee_type);
        }
    }
    return typeList.length;
}

const turnSumAPI = (options: any, type: "FIXED" | "HOURLY" | "MONTHLY", apiData:any) => {
    options.series = [];
    options.labels = ["Car", "Bike"];

    const len = apiData.length;
    let bikeTurn = 0;
    let carTurn = 0;
    for(let i = 0; i < len; i++) {
        if(apiData[i].fee_type == type) {
            if(apiData[i].vehicle_type == "BIKE") {
                bikeTurn = apiData[i].turn_count;
            }
            else if(apiData[i].vehicle_type == "CAR") {
                carTurn = apiData[i].turn_count;
            }
        }
    }
    options.series.push(bikeTurn);
    options.series.push(carTurn);
}

const hourSumAPI = (options: any, type: "FIXED" | "HOURLY" | "MONTHLY", apiData:any) => {
    options.series = [];
    options.labels = ["Bike", "Car"];

    const len = apiData.length;
    let bikeHour = 0;
    let carHour = 0;
    for(let i = 0; i < len; i++) {
        if(apiData[i].fee_type == type) {
            if(apiData[i].vehicle_type == "BIKE") {
                bikeHour = apiData[i].hours_served;
            }
            else if(apiData[i].vehicle_type == "CAR") {
                carHour = apiData[i].hours_served;
            }
        }
    }
    options.series.push(carHour);
    options.series.push(bikeHour);
}

export { turnSumAPI, hourSumAPI, numOfTypeAPI, listOfTypeAPI };