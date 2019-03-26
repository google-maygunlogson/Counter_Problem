import {combineReducers} from 'redux';
import changeNumberReducer from './changeNumberReducer';


const allReducers = combineReducers(
    {
        num:changeNumberReducer
    });

export default allReducers;
