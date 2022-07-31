import ApexCharts from 'apexcharts';
import React from "react";

const ScatterChartBasic = ({ api, myID, param, height, apiData }: any) => {
    let options = {
        series: [
            {
                name: 'TEAM 1',
                data: [
                    [1659114000000, 20],
                    [1659114000000, 5],
                    [1658693860000, 15],
                    [1658650660000, 10],
                ]
            },
            {
                name: 'TEAM 2',
                data: [
                    [1659128650873, 13],
                    [1653704287773, 5],
                    [1658737060000, 16],
                    [1658564260000, 10],
                ]
            },
        ],
        title: {
            text: "hi",
            align: 'left',
            offsetX: 9,
            style: {
                fontSize: '25px',
            },
        },
        chart: {
            height: height,
            width: '100%',
            type: 'scatter',
            zoom: {
                type: 'xy'
            },
            animations: {
                enabled: false,
                // speed: 2,
            }
        },
        tooltip: {
            enabled: true,
            x: {
                show: true,
                format: 'HH:mm',
                formatter: undefined,
            },
        },
        colors: ['#546E7A', '#E91E63'],
        // fill: {
        //     type: 'image',
        //     image: {
        //         src: ['../../images/blue.png', '../../images/green.png'],
        //         width: 5,
        //         height: 5,
        //     }
        // },
        dataLabels: {
            enabled: false
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: 'HH:mm'
            }
        },
        // yaxis: {
        //     max: 70
        // }
    };

    const [_document, set_document] = React.useState<any>(null)

    React.useEffect(() => {
        set_document(document)
    }, [])

    React.useEffect(() => {
        // if (_document != null && window != undefined && state != "READY") {
        if (_document != null && window != undefined && apiData != -1) {
            api(options, param, apiData);

            let doc:any = document.getElementById(myID);
            doc.innerHTML = "";

            const chart = new ApexCharts(document.querySelector("[id='" + myID + "']"), options);
            chart.render();

        }
    }, [_document, apiData]);

    return (
        <div id={myID}>
        </div>
    );
}

export default ScatterChartBasic;