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

const Compare = ({ swapis }: any) => {
    const router = useRouter();
    const { userID, parkingID } = router.query;
    // console.log({ userID, parkingID })

    const [earningData, setEarningData] = React.useState(-1);
    const [vehicalPerHourData, setVehicalPerHourData] = React.useState(-1);
    const [turnAndHourData, setTurnAndHourData] = React.useState(-1);
    const [timeParkingData, setTimeParkingData] = React.useState(-1);

    const fetchEarningData = async () => {
        // const req = await fetch(`https://zppark.live/api/dashboard/earning?period=7&partner=${userID}&parking=${parkingID}`);
        // const newData = await req.json();

        // return setEarningData(newData);
        await axios.get(`https://zppark.live/api/dashboard/earning?period=7&partner=${userID}&parking=${parkingID}`)
            .then(function (response) {
                // handle success
                setEarningData(response.data.data);
                // console.log(response);
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
        await axios.get(`https://zppark.live/api/dashboard/vehicle/avgcountbyhour?parking=${parkingID}`)
            .then(function (response) {
                // handle success
                setVehicalPerHourData(response.data.data);
                // console.log(response);
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

        await axios.get(`https://zppark.live/api/dashboard/vehicle/served?partner=${userID}&parking=${parkingID}`)
            .then(function (response) {
                // handle success
                setTurnAndHourData(response.data.data);
                console.log(response);
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
        // const req = await fetch(`https://zppark.live/api/dashboard/vehicle/occupation?parking=${parkingID}`);
        // const newData = await req.json();

        // return setTimeParkingData(newData);

        await axios.get(`https://zppark.live/api/dashboard/vehicle/occupation?parking=${parkingID}`)
            .then(function (response) {
                // handle success
                setTimeParkingData(response.data.data);
                // console.log(response);
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
        if(userID != undefined && parkingID != undefined) {
            fetchEarningData();
            fetchVehicalPerHourData();
            fetchTurnAndHourData();
            fetchTimeParkingData();
        }
    }, [userID, parkingID])

    const backBtnHandler = () => {
        router.push("/account?userID=" + userID);
    }

    return (
        <LayoutMain>
            <div className={compareStyle.container} >
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <h1 className={accountStyle.sayHi} style={{ marginBottom: "30px" }}>Welcome ID: {userID} !</h1>
                    <Button style={{paddingBottom: "2px", marginRight: "15px"}} auto icon={<div style={{height: "25px", width: "25px",margin: "auto auto", verticalAlign: "middle"}}><Image src="/svg/backIcon.svg" width={25} height={25} /></div>} onClick={backBtnHandler}/>
                </div>


                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                    <div style={{ width: "53%" }}>
                        <LineChart width="100%" height="200px" haveFilter api={earningEachTypeAPI} myID="linechart123" apiData={earningData} />
                        <LineChart width="100%" height="256px" api={vehicalPerHourAPI} myID="linechart456" apiData={vehicalPerHourData} />
                    </div>

                    <DonutGrChart width="45%" height="200px" apiData={turnAndHourData} />
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "20px" }}>

                    <ScatterChart width="49%" height="300px" api={timeParkingAPI} myID="scatter645" param="CAR" apiData={timeParkingData} />
                    <ScatterChart width="49%" height="300px" api={timeParkingAPI} myID="scatter2211" param="BIKE" apiData={timeParkingData} />

                </div>


                {/* 
                <div style={{width: "100%"}}>
                    <LineChart width="53%" height="230px" haveFilter api={earningEachTypeAPI} myID="linechart123" />
                    <LineChart width="53%" height="230px" haveFilter api={vehicalPerHourAPI} myID="linechart456" />
                    <DonutGrChart width="45%" height="200px" />
                    <ScatterChart width="50%" height="400px" api={timeParkingAPI} myID="scatter645" param="CAR" />
                    <ScatterChart width="50%" height="400px" api={timeParkingAPI} myID="scatter2211" param="BIKE" />
                </div>
                 */}
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