import { combineReducers }          from 'redux';
import { reducer as carsReducer }   from './carsReducer';
import { reducer as alertsReducer } from './alertsReducer'

export default combineReducers({ carsReducer, alertsReducer })