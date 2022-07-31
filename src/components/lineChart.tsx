import dynamic from 'next/dynamic';

const LineChartDynamic = dynamic(
    () => import('components/lineChartBasic'),
    {ssr: false}
)

interface LineChartProps {
    width: number | string,
    height: number | string,
    haveFilter?: boolean,
    api?: Function,
    myID: string,
    style?: React.CSSProperties,
    apiData?: any,
}

const LineChart = ({width, height, haveFilter, api, myID, style, apiData}:LineChartProps) => {
    return (
        <LineChartDynamic width={width} height={height} haveFilter={haveFilter} api={api} myID={myID} style={style} apiData={apiData} />
    )
}

export default LineChart;