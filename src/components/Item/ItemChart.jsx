import React from 'react';
import { 
    Grid,
    Paper 
}  from '@material-ui/core';
import { ResponsiveLine } from '@nivo/line';

function ItemChart({dataChartPrice}) {
    return (
        <>
            {dataChartPrice[0].data.length > 1 ? 
                <Grid item>
                    <Paper variant="outlined" style={{height:150}}>
                        <ResponsiveLine
                            data={dataChartPrice}
                            margin={{ top: 8, right: 5, bottom: 8, left: 50 }}
                            colors={"#467fcf"}
                            useMesh={true}
                            lineWidth={3}
                            enableGridX={false}
                            axisBottom={null}
                            enableSlices="x"
                            enableArea={true}
                        />
                    </Paper>
                </Grid>
            : null}  
        </>
    )
}

export default ItemChart;