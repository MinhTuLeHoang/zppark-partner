import React from "react";
import { Card } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { turnSumAPI, hourSumAPI, numOfTypeAPI, listOfTypeAPI } from "api/turnAndHourAPI";

const short = require('short-uuid');

const DonutChartDynamic = dynamic(
    () => import("components/donutChartBasic"),
    {ssr: false}
)

interface DonutChartProps {
    width: string,
    height: string,
    api?: Function,
    param?: any,
    myID: string,
    apiData?:any,
}

const DonutChart = ({width, height, api, param, myID, apiData}:DonutChartProps) => {
    return (
        <div style={{width: width, height: height}}>
            <DonutChartDynamic width={width} height={height} api={api} param={param} myID={myID} apiData={apiData} />
        </div>
    );
}


const DonutGrChart = ({width, apiData}:any) => {
    
    const numOfType = numOfTypeAPI(apiData);
    const listOfType = listOfTypeAPI(apiData);

    const myIDList:string[] = [];
    for (let i = 0; i < numOfType*2; i++) {
        myIDList.push(short.generate());
    }

    return (
        <Card style={{width:width, height: "max-content", overflowX: "hidden"}} >
            <Card.Header style={{paddingTop: "25px", paddingLeft: "25px", color:"rgb(55,61,63)="}}>
                <h2>Turns and Hours Counting (single 01)</h2>
            </Card.Header>

            <Card.Body style={{width: "100%"}} > 
                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                    <p style={{width: "40%", fontSize:"1.4em", fontWeight: "bold", marginTop: "16px", marginBottom: "30px"}}>Turns Count</p>
                    <p style={{width: "40%", fontSize:"1.4em", fontWeight: "bold", marginTop: "16px", marginBottom: "30px"}}>Hours Count</p>
                </div>   
                <div style={{display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end"}} >
                    {listOfType.map((type:any, index:number) => {
                        return(
                            <div style={{width: "100%", display: "flex", flexDirection: "row", fontWeight: "bold", marginBottom: "25px"}} key={index}>
                                <p style={{margin: "auto 0", width: "14%", fontSize: "1em", textAlign: "center"}}>{type}</p>
                                <DonutChart width="43%" height="100%" api={turnSumAPI} param={type} myID={myIDList[2*index]} key={myIDList[2*index]} apiData={apiData} />
                                <DonutChart width="43%" height="100%" api={hourSumAPI} param={type} myID={myIDList[2*index+1]} key={myIDList[2*index+1]} apiData={apiData} />
                            </div>
                        );
                    })}
                </div>
            </Card.Body>
        </Card>
    )
}


export {DonutChart, DonutGrChart};
