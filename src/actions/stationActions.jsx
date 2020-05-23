import Axios from "axios";

export const FETCH_STATIONS_REQUEST = 'FETCH_STATIONS_REQUEST';
export const FETCH_STATIONS_SUCCESS = 'FETCH_STATIONS_SUCCESS';
export const FETCH_STATIONS_FAILURE = 'FETCH_STATIONS_FAILURE';


const fetchStationsRequest = () => {
    return {
        type: FETCH_STATIONS_REQUEST
    }
};

const fetchStationsSuccess = stations => {
    return {
        type: FETCH_STATIONS_SUCCESS,
        payload: stations
    }
};

const fetchStationsFailure = error => {
    return {
        type: FETCH_STATIONS_FAILURE,
        payload: error
    }
};

export const fetchStations= () => {
    return (dispatch) => {
        dispatch(fetchStationsRequest());
        Axios.get(`${process.env.REACT_APP_API_URI}/api/station`)
            .then(response => {
                dispatch(fetchStationsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchStationsFailure(error.message));
            })
    }
};
