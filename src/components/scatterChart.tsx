import { Card } from "@nextui-org/react";
import dynamic from "next/dynamic";

const ScatterChartDynamic = dynamic(
    () => import("components/scatterChartBasic"),
    { ssr: false }
)

const ScatterChart = ({ width, height, api, param, myID, apiData }: any) => {
    return (
        <Card style={{width:width}}>
            <Card.Body>
                <ScatterChartDynamic width="100%" height={height} api={api} param={param} myID={myID} apiData={apiData} />
            </Card.Body>
        </Card>
    );
}

export default ScatterChart;