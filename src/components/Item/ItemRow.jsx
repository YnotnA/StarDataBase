import React from 'react';
import { selectItem } from '../../actions/ItemActions';
import { useDispatch } from "react-redux";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Credit from '../Credit/Credit';
import { LineChart, Line, YAxis } from 'recharts';

function ItemRow({id, name, rank, image, type, currentPrice, previousPrice, prices, updatedAt}) {

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
                {prices.length > 1 ?
                    <LineChart width={100} height={30} data={prices}>
                        <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} isAnimationActive={false} />
                        <YAxis type="number" hide={true} domain={['auto', 'auto']} />
                    </LineChart>
                : null }
            </TableCell>
            <TableCell align="right"><Credit value={currentPrice} previousValue={previousPrice}/></TableCell>
        </TableRow>
    )
}

export default ItemRow;