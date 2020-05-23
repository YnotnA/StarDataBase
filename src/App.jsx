import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import ItemPage from './components/Item/ItemPage';
import ItemStationPage from './components/ItemStation/ItemStationPage';
import StationPage from './components/Station/StationPage';

const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: 16
    }
}));

function App() {
    const classes = useStyles();

    return (            
        <Router>
            <Header/>
            <Container className={classes.margin}>
                <Switch>
                    <Route path="/StarDataBase/station/:id/items" component={ItemStationPage} />
                    <Route path="/StarDataBase/stations" component={StationPage} />
                    <Route path="/StarDataBase/items" component={ItemPage} />    
                    <Route path="/StarDataBase/" component={StationPage} />    
                </Switch>
            </Container>
        </Router>
    )
}

export default App;