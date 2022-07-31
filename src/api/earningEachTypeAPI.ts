// import apiData from "../../public/data/Single04.json";

// API[index] (single04)
/////////////////////////////////////////
// "parking_id": 894,
// "date": "2022-07-29",
// "vehicle": "BIKE",       // CAR, BIKE
// "earning": 5700


// GRAPH DATA
/////////////////////////////////////////
// data type: {name: "CAR", data:[1, 2, 3, 4, 5]}
// data type: {name: "BIKE", data:[1, 2, 3, 4, 5]}
// yaxis.categories: ["1 tay", "2 tay", "3 tay", "4 tay", "5 tay"]





const earningEachTypeAPI = (options: any, apiData: any) => {
    const len = apiData.length;

    let dateObj = [];

    options.title.text = "Earning each type (single04)";

    let carObj:any = {name: "Car", data: []};
    let bikeObj:any = {name: "Bike", data: []};
    for(let i = 0; i < len; i++) {
        if(apiData[i].vehicle == "CAR") {
            carObj.data.push(apiData[i].earning);
        }
        else if(apiData[i].vehicle == "BIKE") {
            bikeObj.data.push(apiData[i].earning);
        }

        if(dateObj.indexOf(apiData[i].date) == -1) {
            dateObj.push(apiData[i].date);
        }
    }
    options.series = [];
    options.series.push(carObj);
    options.series.push(bikeObj);
    
    options.xaxis.categories = dateObj;
}

export default earningEachTypeAPI;