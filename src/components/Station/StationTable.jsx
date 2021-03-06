import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import EnhancedTableHead from '../Table/EnhancedTableHead';
import StationRow from './StationRow';

function StationTable({ stations, headCells }) {

    const search = useSelector(state => state.stations.search);
    const [filteredStations, setFilteredStations] = useState(stations);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');

    useEffect(() => {
        if (stations.length > 0 && search) {
            const lowercasedFilter = search.toLowerCase();
            const stationFilters = stations.filter(station => {
                return Object.keys(station).some(key => {
                    if (typeof(station[key]) === "string") {
                        return station[key].toLowerCase().includes(lowercasedFilter);
                    } else if (typeof(station[key]) === "number") {
                        return station[key] === Number(search);
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
        <TableContainer component={Paper} variant="outlined">
            <Table>
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
                        <StationRow 
                            key={station.id}
                            id={station.id}
                            name={station.name}
                        />
                    ) : null} 
                </TableBody>  
            </Table>
        </TableContainer> 
    )
}

export default StationTable;