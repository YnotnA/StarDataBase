import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { 
    Grid,
    Paper 
}  from '@material-ui/core';
import { ResponsiveLine } from '@nivo/line';

function ItemsChart() {
    const items = useSelector(state => state.items.items)
    const [data, setData] = useState(items)

    useEffect(() => {
        if (items) {
            const clone = require('rfdc')()
            const newItems = clone(items)
            let combinedDataChartPrices = []

            newItems.map(item => {
                item.dataChartPrice[0].data = [...item.dataChartPrice[0].data, {x: new Date(), y: item.currentPrice}]
                combinedDataChartPrices = [...combinedDataChartPrices, ...item.dataChartPrice]
            })

            setData(combinedDataChartPrices)
        }
    }, [items])

    return (
        <>
            {data.length > 1 ? 
                <Grid item>
                    <Paper variant="outlined" style={{height:300}}>
                        <ResponsiveLine
                            data={data}
                            margin={{ top: 45, right: 5, bottom: 30, left: 50 }}
                            useMesh={true}
                            lineWidth={3}
                            xScale={{
                                type: 'time',
                                precision: 'hour',
                              }}
                            axisBottom= {{
                                format: '%b %d',
                              }}
                            enableSlices="x"
                            pointSize={12}
                            legends={[
                                {
                                    anchor: 'top-left',
                                    direction: 'row',
                                    justify: false,
                                    translateX: 0,
                                    translateY: -32,
                                    itemsSpacing: 0,
                                    itemDirection: 'left-to-right',
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemOpacity: 0.75,
                                    symbolSize: 13,
                                    symbolShape: 'circle',
                                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemBackground: 'rgba(0, 0, 0, .03)',
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </Paper>
                </Grid>
            : null}
        </>
    )
}

export default ItemsChart;