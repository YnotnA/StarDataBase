import React from 'react';
import { useSelector } from "react-redux";
import moment from 'moment';
import Chart from "react-apexcharts";
import fr from "apexcharts/dist/locales/fr.json"
import Skeleton from '@material-ui/lab/Skeleton';

function ItemStationCharts() {
    const items = useSelector(state => state.itemsStation.station.items)
    const series = useSelector(state => state.itemsStation.seriesChart)

    const optionsChart = {
        chart: {
            id: 'chart',
            locales: [fr],
            defaultLocale: 'fr',
            animations: {enabled: false},
            zoom: {
                type: "xy",
                autoScaleYaxis: true,
            }
        }, 
        xaxis: {type: 'datetime'},
        stroke: {curve: 'smooth', width: 2},
        zoom: {enabled: true},
        markers: {size: 0},
        dataLabels: {enabled: false},
    }

    const optionsBrush = {
        chart: {
            locales: [fr],
            defaultLocale: 'fr',
            selection: {
                enabled: true,
                xaxis: {
                    min: moment().subtract(5, 'days').valueOf(),
                    max: moment().valueOf()
                }
            },
            brush:{
                target: 'chart',
                enabled: true
            },
            animations: {enabled: false}
        }, 
        xaxis: {type: 'datetime', tooltip: {enabled: false}},
        yaxis: {tickAmount: 2},
        stroke: {curve: 'smooth'},
        legend: {show: false},
        markers: {size: 0},
        dataLabels: {enabled: false},
    }

    return (
        <>
            {series.length > 0 ?
                <>
                    <Chart
                        options={optionsChart}
                        height="300"
                        series={series}
                        type="line"
                        width="100%"
                    />
                    <Chart
                        options={optionsBrush}
                        height="100"
                        series={series}
                        type="line"
                        width="100%"
                    />
                </>
            : 
                <>
                    {items.length > 0 ? 
                        <Skeleton variant="rect" animation="wave" height={430}/>
                    : null}
                </>  
            }
        </>
    )
}

export default ItemStationCharts;