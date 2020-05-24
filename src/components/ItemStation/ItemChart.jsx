import React from 'react';
import Chart from "react-apexcharts";
import fr from "apexcharts/dist/locales/fr.json"

function ItemChart({dataPrice = []}) {

    const optionsChart = {
        chart: {
            toolbar: {show: false},
            zoom: {enabled: false},
            animations: {enabled: false},
            locales: [fr],
            defaultLocale: 'fr'
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
            {dataPrice.data.length > 1 ?
                <Chart
                    options={optionsChart}
                    height="200"
                    series={[dataPrice]}
                    type="area"
                    width="100%"
                />
            : null}  
        </>
    )
}

export default ItemChart;