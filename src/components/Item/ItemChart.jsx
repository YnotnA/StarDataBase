import React from 'react';
import { 
    Grid,
    Paper 
}  from '@material-ui/core';
import Chart from "react-apexcharts";

function ItemChart({dataChartPrice}) {

    const optionsChart = {
        chart: {
            toolbar: {show: false},
            zoom: {enabled: false},
            parentHeightOffset: 15
        },
        xaxis: {type: 'datetime', labels: {show: false}},
        yaxis: {labels: {show: false}},
        markers: {size: 5},
        stroke: {width: 2},
    }

    return (
        <>
            {dataChartPrice.data.length > 1 ? 
                <Grid item>
                    <Paper variant="outlined">
                        <Chart
                            options={optionsChart}
                            height="150"
                            series={[dataChartPrice]}
                            type="area"
                            width="100%"
                        />
                    </Paper>
                </Grid>
            : null}  
        </>
    )
}

export default ItemChart;