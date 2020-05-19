import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import ItemRow from "./ItemRow";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const headCells = [
    { id: 'image', numeric: false, disablePadding: false, label: '' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'rank', numeric: false, disablePadding: false, label: 'Rank' },
    { id: 'priceevo', numeric: false, disablePadding: false, label: 'Price Evolution' },
    { id: 'currentPrice', numeric: true, disablePadding: false, label: 'Price' },
  ];

const useStyles = makeStyles((theme) => ({
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
}));


function ItemTable() {
    const classes = useStyles();
    const items = useSelector(state => state.items.items);
    const search = useSelector(state => state.items.search);
    const [filteredItems, setFilteredItems] = useState(items);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');

    useEffect(() => {
        if (items) {
            if (search) {
                const lowercasedFilter = search.toLowerCase();
                const itemFilters = items.filter(item => {
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

                setFilteredItems(itemFilters);
            } else {
                setFilteredItems(items);   
            }   
        }   
    }, [items, search])

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

    function EnhancedTableHead(props) {
        const { classes, order, orderBy, onRequestSort } = props;
        const createSortHandler = (property) => (event) => {
            onRequestSort(event, property);
        };
      
        return (
            <TableHead>
                <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'default'}
                    sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
        );
    }

    return (
        <TableContainer component={Paper} variant="outlined">
            <Table stickyHeader>
                <EnhancedTableHead
                    classes={classes}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={filteredItems.length}
                />
                <TableBody>
                    {filteredItems ? 
                    stableSort(filteredItems, getComparator(order, orderBy))
                    .map(item =>
                        <ItemRow 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            type={item.type}
                            rank={item.rank}
                            image={item.image}
                            currentPrice={item.currentPrice}
                            previousPrice={item.previousPrice}
                            prices={item.prices}
                            updatedAt={item.updatedAt}
                        />
                    ) : null} 
                </TableBody>  
            </Table>
        </TableContainer> 
    )
}

export default ItemTable;