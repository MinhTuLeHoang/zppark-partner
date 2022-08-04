// import apiData from "../../public/data/Single03.json";

// API[index] (single03)
/////////////////////////////////////////
// {
//     "session_id": 3,
//     "vehicle_type": "CAR",
//     "check_in": "19:17:12",
//     "occupied_time": 1.4167
// },


// GRAPH DATA
/////////////////////////////////////////
// data type: {name: "CAR", data:[ [time, value], [time, value], 3, 4, 5]}
// data type: {name: "BIKE", data:[ [time, value], [time, value], 3, 4, 5]}
// xaxis.categories: ["0", "1", "2", "22", "23"]

const timeParkingAPI = (options: any, param: "CAR" | "BIKE", apiData:any) => {
    const today = new Date().toJSON();
    const date = today.slice(0, 11);
    const zone = today.slice(-5);

    if (param == "CAR") {
        options.colors = ["#018FFB"];
        options.title.text = "Time occupation of Car";
    }
    else {
        options.colors = ["#00E296"];
        options.title.text = "Time occupation of Bike";
    }

    let obj = [];
    for (let i = 0; i < apiData.length; i++) {
        if (apiData[i].vehicle_type == param) {
            obj.push([apiData[i].check_in, apiData[i].occupied_time]);
        }
    }


    // sort by checkin_hour
    obj.sort((a: any, b: any) => {
        return (a[0] > b[0]) ? 1 : -1;
    });

    for (let i = 0; i < obj.length; i++) {
        let time = date + obj[i][0] + zone;
        obj[i][0] = Date.parse(time);
    }

    const name = (param == "CAR") ? "Car" : "Bike";
    options.series = [];
    options.series.push({ name: name, data: obj });
}

export default timeParkingAPI;