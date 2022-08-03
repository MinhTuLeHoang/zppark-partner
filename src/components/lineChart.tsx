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
    setFilterCallBack?: any,
}

const LineChart = ({width, height, haveFilter, api, myID, style, apiData, setFilterCallBack}:LineChartProps) => {
    return (
        <LineChartDynamic width={width} height={height} haveFilter={haveFilter} api={api} myID={myID} style={style} apiData={apiData} setFilterCallBack={setFilterCallBack} />
    )
}

export default LineChart;