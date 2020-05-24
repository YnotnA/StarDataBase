import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import EnhancedTableHead from '../Table/EnhancedTableHead';
import { Typography } from '@material-ui/core';
import ItemDetailRow from './ItemDetailRow';


function ItemDetailTable({ headCells }) {

    const search = useSelector(state => state.itemDetail.search);
    const item = useSelector(state => state.itemDetail.item);
    const stations = useSelector(state => state.itemDetail.item.stations);
    const [filteredStations, setFilteredStations] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');

    useEffect(() => {
        if (stations.length > 0 && search) {
            
            const lowercasedFilter = search.toLowerCase();
            const stationFilters = stations.filter(item => {
                return Object.keys(item).some(key => {
                        if (typeof(item[key]) === "string") {
                            return item[key].toLowerCase().includes(lowercasedFilter);
                        } else if (typeof(item[key]) === "number") {
                            return item[key] === Number(search);
                        }
                        return false;
                    }
                );
            });

            setFilteredStations(stationFilters);
        } else {
            setFilteredStations(stations);   
        } 
    }, [stations, search])

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });

        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
    }

    return (
        <>
            {filteredStations.length > 0 ? 
                <TableContainer component={Paper} variant="outlined">
                    <Table size="small">
                        <EnhancedTableHead
                            headCells={headCells}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={filteredStations.length}
                        />
                        <TableBody>
                            {filteredStations ? 
                            stableSort(filteredStations, getComparator(order, orderBy))
                            .map(station =>
                                <ItemDetailRow
                                    key={station.id}
                                    item={item}
                                    station={station}
                                />
                            ) : null} 
                        </TableBody>  
                    </Table>
                </TableContainer> 
            : <Typography variant="h5">No stations</Typography> }
        </>
    )
}

export default ItemDetailTable;