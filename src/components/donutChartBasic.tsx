import ApexCharts from 'apexcharts';
import React from 'react';
import donutChartStyle from 'styles/donutChartBasic.module.css';


interface DonutChartBasicProps {
    width: string,
    height: string,
    api?: Function,
    param?: any,
    myID: string,
}

const DonutChartBasic = ({ api, param, myID, apiData }: any) => {
    let options = {
        series: [44, 55],
        labels: ['Apple', 'Mango'],
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 300,
            options: {
                chart: {
                    width: 400
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '40%',
                    labels: {
                        show: true,
                        name: {
                            fontSize: '13px',
                            offsetY: -3,
                        },
                        value: {
                            fontSize: '13px',
                            offsetY: 3,
                        }
                    }
                }
            }
        }
    };

    const [_document, set_document] = React.useState<any>(null)
    // const [state, setState] = React.useState("NOT READY");

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
    },[_document, apiData]);

    return (
            <div className={donutChartStyle.donutchart} id={myID}>
            </div>
    );
}

export default DonutChartBasic;