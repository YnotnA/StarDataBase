import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Credit from '../Credit/Credit';
import { LineChart, Line, YAxis } from 'recharts';
import { fetchItemPricesByStation, selectItemStation } from '../../actions/ItemStationActions';

function ItemStationRow({ item }) {

    const dispatch = useDispatch();
    const station = useSelector(state => state.itemsStation.station);
    
    function handleOnMouseEnter() {
        dispatch(selectItemStation(item));
    }

    useEffect(() => {
        dispatch(fetchItemPricesByStation(station.id, item.id))    
    }, [])

    return (
        <TableRow onMouseOver={handleOnMouseEnter} hover>
            <TableCell>
                <Avatar src={(null !== item.imgPath)  ? `${process.env.REACT_APP_IMG_URI}${item.imgPath}` : item.imgPath}></Avatar>
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.type.subCategory.name}</TableCell>
            <TableCell>{item.type.name}</TableCell>
            <TableCell>
                {item.prices !== undefined && item.prices.length > 1 ?
                    <LineChart width={100} height={30} data={item.prices}>
                        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} isAnimationActive={false} />
                        <YAxis type="number" hide={true} domain={['auto', 'auto']} />
                    </LineChart>
                : null}
            </TableCell>
            <TableCell align="right">
                <Credit value={item.currentSellingPrice} previousValue={item.previousSellingPrice}/>
            </TableCell>
        </TableRow>
    )
}

export default ItemStationRow;