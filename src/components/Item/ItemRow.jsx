import React, { useState, useEffect } from 'react';
import { selectItem } from '../../actions/ItemActions';
import { useDispatch } from "react-redux";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import { Line } from '@nivo/line';
import Credit from '../Credit/Credit';

function ItemRow({id, name, rank, image, type, currentPrice, previousPrice, dataChartPrice, updatedAt}) {

    const dispatch = useDispatch();
    
    function handleOnMouseEnter() {
        dispatch(selectItem(id));
    }
    
    return (
        <TableRow onMouseOver={handleOnMouseEnter} hover>
            <TableCell>
                <Avatar src={`${process.env.PUBLIC_URL}${image}`}></Avatar>
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{type}</TableCell>
            <TableCell>{rank}</TableCell>
            <TableCell>
                {dataChartPrice[0].data.length > 1 ?            
                    <Line
                        data={dataChartPrice}
                        width={100}
                        height={30}
                        colors={"#ff3333"}
                        curve="cardinal"
                        lineWidth={1}
                        enableGridX={false}
                        enableGridY={false}
                        axisBottom={null}
                        axisLeft={null}
                        enablePoints={false}
                        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                        margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
                    />
                : null }
            </TableCell>
            <TableCell align="right"><Credit value={currentPrice} previousValue={previousPrice}/></TableCell>
        </TableRow>
    )
}

export default ItemRow;