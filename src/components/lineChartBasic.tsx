import ApexCharts from 'apexcharts';
import React from 'react';
import { Card } from '@nextui-org/react';
import { Form } from 'react-bootstrap';

const LineChartBasic = ({ width, height, haveFilter, api, myID, apiData, setFilterCallBack }: any) => {
    let options = {
        series: [{
            name: "Session Duration",
            data: [45, 52, 38, 24]
        },
        {
            name: "Page Views",
            data: [35, 41, 62, 42]
        },
        {
            name: 'Total Visits',
            data: [87, 57, 74, 99]
        }
        ],
        chart: {
            height: 350,
            width: "100%",
            type: 'line',
            toolbar: {
                show: true,
            },
            zoom: {
                enabled: true
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5]
        },
        title: {
            text: 'Page Statistics',
            align: 'left',
            offsetX: 9,
            style: {
                fontSize: '25px',
            },
        },
        legend: {
            tooltipHoverFormatter: function (val: any, opts: any) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan'],
        },
        yaxis: {
            tickAmount: 4,
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    };

    options.chart.height = height;

    const [_document, set_document] = React.useState<any>(null)

    React.useEffect(() => {
        set_document(document)
    }, [])

    React.useEffect(() => {
        if (_document != null && window != undefined && apiData != -1) {
            api(options, apiData);
            // console.log(api);
            // console.log(options);

            let doc:any = document.getElementById(myID);
            doc.innerHTML = "";

            const chart = new ApexCharts(document.querySelector("#" + myID), options);
            chart.render();
        }
    }, [_document, apiData])

    const selectFilterHandler = (event:any) => {
        console.log("change r nha")
        console.log(event.target.value)
        setFilterCallBack(event.target.value);
    }

    return (
        <Card style={{ width: width, height: "max-content", marginTop: "0px", marginBottom: "15px" }}>
            <Card.Body>
                <div id={myID}>
                </div>
            </Card.Body>

            {haveFilter &&
                <Card.Footer style={{ paddingTop: "0px", paddingBottom: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "row", margin: "0 auto" }}>
                        <p style={{ margin: "auto 0", fontSize: "0.9em" }}>These data above are showed within</p>
                        <Form.Select size="sm" style={{ width: "90px", height: "30px", borderRadius: "8px", marginLeft: "10px", paddingLeft: "8px", backgroundColor: "white" }} id={"filter" + myID} onChange={selectFilterHandler}>
                            <option value={7} defaultChecked >7 days</option>
                            <option value={14}>2 weeks</option>
                            <option value={30}>1 month</option>
                        </Form.Select>
                    </div>
                </Card.Footer>
            }
        </Card>
    );
}

export default LineChartBasic;