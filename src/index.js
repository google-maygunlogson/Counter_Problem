import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
// import allReducer from './reducer';

const exampleReducer = (state = {}, action) =>
{
    console.log('ex reducer hit');
    console.log(action);
    switch(action.type)
    {
        case 'example_action':
        return  {num:0};
        case '+':
        return {num:state.num+1};
        case '-':
        return {num:state.num-1};
        default: 
        return state;
    }
};

const allReducer = combineReducers({num:exampleReducer});

const initState = 
{
    num:9
};

const store = createStore(exampleReducer,initState); //put combine reducer here later
window.store = store;
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
