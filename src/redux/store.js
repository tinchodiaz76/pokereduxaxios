import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
/*THUNS se usa para la PROMESAS*/
import thunk from 'redux-thunk';
/*Siempre importamos a todos los REDUCERS que queramos storear*/
import pokeReducer from './pokeDucks';
 
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducers =combineReducers ({
    pokemones: pokeReducer, /*Aca se indican todos los reducers*/
});

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    
    const store= createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
    
    return store;
};


/*
import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import loginReducer from "./userLogin/reducer";

const reducers =combineReducers ({
    loginReducer, --/*Aca se indican todos los reducers
});


const store= createStore(reducers,composeWithDevTools());

export default store;
*/