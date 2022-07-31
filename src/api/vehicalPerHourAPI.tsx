// import apiData from "../../public/data/Single02.json";

// API[index] (single02)
/////////////////////////////////////////
// {
//     "vehicle_type": "CAR",
//     "checkin_hour": 18,
//     "avg_count": 75
// },
// {
//     "vehicle_type": "BIKE",
//     "checkin_hour": 19,
//     "avg_count": 10
// },
// {
//     "vehicle_type": "BIKE",
//     "checkin_hour": 21,
//     "avg_count": 45
// },

// {
//     "vehicle_type": "BIKE",
//     "checkin_hour": 22,
//     "avg_count": 90
// },


// GRAPH DATA
/////////////////////////////////////////
// data type: {name: "CAR", data:[1, 2, 3, 4, 5]}
// data type: {name: "BIKE", data:[1, 2, 3, 4, 5]}
// xaxis.categories: ["0", "1", "2", "22", "23"]


const vehicalPerHourAPI = (options: any, apiData: any) => {
    if (apiData.length == 0) {
        options.title.text = "Verhicle per hour (single02)";
        options.xaxis.categories = [];
        options.series = [
            { name: "Car", data: [] },
            { name: "Bike", data: [] },
        ];
        return;
    }

    let carObj = [];
    let bikeObj = [];

    for (let i = 0; i < apiData.length; i++) {
        if (apiData[i].vehicle_type === "CAR") {
            carObj.push(apiData[i]);
        }
        else if (apiData[i].vehicle_type === "BIKE") {
            bikeObj.push(apiData[i]);
        }
    }

    // sort by checkin_hour
    carObj.sort((a: any, b: any) => {
        return a.checkin_hour - b.checkin_hour;
    });
    bikeObj.sort((a: any, b: any) => {
        return a.checkin_hour - b.checkin_hour;
    });


    let carCopy = [...carObj];
    carObj = [];

    let tempIndex = 0;
    for (let i = 0; i <= 23; i++) {
        if (i == carCopy[tempIndex].checkin_hour) {
            carObj.push(carCopy[tempIndex].avg_count);
            tempIndex++;
            if (tempIndex >= carCopy.length) break;
        }
        else {
            carObj.push(0);
        }
    }

    let bikeCopy = [...bikeObj];
    bikeObj = [];

    tempIndex = 0;
    for (let i = 0; i <= 23; i++) {
        if (i == bikeCopy[tempIndex].checkin_hour) {
            bikeObj.push(bikeCopy[tempIndex].avg_count);
            tempIndex++;
            if (tempIndex >= carCopy.length) break;
        }
        else {
            bikeObj.push(0);
        }
    }

    let dateObj: string[] = [];
    for (let i = 0; i <= 23; i++) {
        dateObj.push(i.toString());
    }

    // main
    options.title.text = "Verhicle per hour (single02)";
    options.xaxis.categories = dateObj;
    options.series = [
        { name: "Car", data: carObj },
        { name: "Bike", data: bikeObj },
    ];
}

export default vehicalPerHourAPI;