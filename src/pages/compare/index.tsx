import React from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";

import LineChart from "components/lineChart";
import LayoutMain from "layouts/layoutMain";
import compareStyle from "styles/compare.module.css";
import accountStyle from "styles/account.module.css";

import earningEachTypeAPI from 'api/earningEachTypeAPI';
import vehicalPerHourAPI from "api/vehicalPerHourAPI";

import { DonutChart, DonutGrChart } from "components/donutChart";
import timeParkingAPI from "api/timeParkingAPI";
import ScatterChart from "components/scatterChart";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { getEmail, getToken } from "utilities/token";
import { BackIcon } from "components/MyIcon";

const Compare = () => {
    const router = useRouter();
    const { parkingID } = router.query;

    const [token, setToken] = React.useState("");
    const [email, setEmail] = React.useState("");

    const [earningData, setEarningData] = React.useState(-1);
    const [vehicalPerHourData, setVehicalPerHourData] = React.useState(-1);
    const [turnAndHourData, setTurnAndHourData] = React.useState(-1);
    const [timeParkingData, setTimeParkingData] = React.useState(-1);

    const [filter, setFilter] = React.useState(7);
    const fetchEarningData = async () => {
        // const req = await fetch(`https://zppark.live/api/dashboard/earning?period=7&partner=${userID}&parking=${parkingID}`);
        // const newData = await req.json();

        // return setEarningData(newData);
        await axios.get(`https://zppark.live/api/dashboard/earning?period=${filter}&parking=${parkingID}`
            , { headers: { 'Authorization': 'Bearer ' + token } }
        )
            .then(function (response) {
                // handle success
                setEarningData(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };
    const fetchVehicalPerHourData = async () => {
        // const req = await fetch(`https://zppark.live/api/dashboard/vehicle/avgcountbyhour?parking=${parkingID}`);
        // const newData = await req.json();

        // return setVehicalPerHourData(newData);
        await axios.get(`https://zppark.live/api/dashboard/vehicle/avgcountbyhour?parking=${parkingID}`
            , { headers: { 'Authorization': 'Bearer ' + token } }
        )
            .then(function (response) {
                // handle success
                setVehicalPerHourData(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    const fetchTurnAndHourData = async () => {
        // const req = await fetch(`https://zppark.live/api/dashboard/vehicle/served?partner=${userID}&parking=${parkingID}`);
        // const newData = await req.json();

        // return setTurnAndHourData(newData);

        await axios.get(`https://zppark.live/api/dashboard/vehicle/served?parking=${parkingID}`
            , { headers: { 'Authorization': 'Bearer ' + token } }
        )
            .then(function (response) {
                // handle success
                setTurnAndHourData(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    const fetchTimeParkingData = async () => {
        await axios.get(`https://zppark.live/api/dashboard/vehicle/occupation?parking=${parkingID}`
            , { headers: { 'Authorization': 'Bearer ' + token } }
        )
            .then(function (response) {
                // handle success
                setTimeParkingData(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    React.useEffect(() => {
        setToken(getToken());
        setEmail(getEmail());
        if (token != "" && token != null && parkingID != undefined) {
            fetchEarningData();
            fetchVehicalPerHourData();
            fetchTurnAndHourData();
            fetchTimeParkingData();
        }
    }, [parkingID, token])

    React.useEffect(() => {
        if (token != "" && token != null && parkingID != undefined) {
            fetchEarningData();
        }
    }, [filter])

    const backBtnHandler = () => {
        router.push("/account");
    }

    return (
        <LayoutMain>
            <div className={compareStyle.container} >
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <h1 className={accountStyle.sayHi} style={{ marginBottom: "30px" }}>Welcome {email} !</h1>
                    <Button style={{ paddingBottom: "2px", marginRight: "15px" }} auto icon={<div style={{ height: "25px", width: "25px", margin: "auto auto", verticalAlign: "middle" }}> <BackIcon/> </div>} onClick={backBtnHandler} />
                </div>


                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ width: "53%" }}>
                        <LineChart width="100%" height="200px" haveFilter api={earningEachTypeAPI} myID="linechart123" apiData={earningData} setFilterCallBack={setFilter} />
                        <LineChart width="100%" height="256px" api={vehicalPerHourAPI} myID="linechart456" apiData={vehicalPerHourData} />
                    </div>

                    <DonutGrChart width="45%" height="200px" apiData={turnAndHourData} />
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "20px" }}>

                    <ScatterChart width="49%" height="300px" api={timeParkingAPI} myID="scatter645" param="CAR" apiData={timeParkingData} />
                    <ScatterChart width="49%" height="300px" api={timeParkingAPI} myID="scatter2211" param="BIKE" apiData={timeParkingData} />

                </div>
            </div>
        </LayoutMain>
    );
}

// export const getStaticProps = async () => {
//     const res = await fetch('https://zppark.live/api/dashboard/earning?period=7&partner=1&parking=894')
//     const swapis: any = await res.json()

//     return {
//         props: {
//             swapis,
//         },
//     }
// }

export default Compare;