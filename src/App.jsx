import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import ItemPage from './components/Item/ItemPage';
import { fetchItems } from './actions/ItemActions';

const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: 16
    }
}));

function App() {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    return (            
        <Router>
            <Header/>
            <Container className={classes.margin}>
                <Switch>
                    <Route path="/" component={ItemPage} />
                </Switch>
            </Container>
        </Router>
    )
}

export default App;