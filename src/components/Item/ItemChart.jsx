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
            animations: {enabled: false}
        },
        grid: {
            padding: {
              right: 30,
              left: 20
            }
        },
        xaxis: {type: 'datetime', labels: {show: false}},
        yaxis: {labels: {show: false}},
        stroke: {width: 5},
        markers: {size: 0},
    }

    return (
        <>
            {dataChartPrice.data.length > 1 ? 
                <Grid item>
                    <Paper variant="outlined">
                        <Chart
                            options={optionsChart}
                            height="200"
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