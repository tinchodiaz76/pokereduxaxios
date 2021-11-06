import axios from 'axios';

//Constantes
const initialValues={
    array:[],
    offset: 0
}

const OBTENER_POKEMONES_EXITO='OBTENER_POKEMONES_EXITO';
const SIGUIENTE_POKEMON_ACCION='SIGUIENTE_POKEMON_ACCION';
const ANTERIOR_POKEMON_ACCION='ANTERIOR_POKEMON_ACCION';


//Reducers Los REDUCERS modifican el state
export default function pokeReducer(state= initialValues, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload.array, offset:action.payload.offset}
        case SIGUIENTE_POKEMON_ACCION:
            return {...state, offset: action.payload}
        case ANTERIOR_POKEMON_ACCION:
            return {...state, offset:action.payload}
        default:
            return state
    }

}

//Acciones
/*Los primeros dos parentesis reciben parametros de entrada*/
/*Lo segundos dos parentesis son parametros de salida*/
export const obtenerPokemonesAccion = ()=> async (dispatch, getState)=>{
    
    console.log('obtenerPokemonesAccion---->getState()=', getState().pokemones); /*getState() Devuelve el STATE  {
                                                                                        array:[],
                                                                                        offset: 0
                                                                                        },para eso lee el STORE.js, combineReducers*/
    const offset= getState().pokemones.offset; 


    try {
        /*const resp= await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')*/
        const resp= await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload:{array:resp.data.results, offset: offset}
        })
        
    }catch(error){
        console.log(error);
    }
}

export const siguientePokemonAccion = (numero) => async (dispatch,getState)=>{
/*
    dispatch({
        type: SIGUIENTE_POKEMON_ACCION, 
        payload: getState().pokemones.offset +numero
    })

    console.log('siguientePokemonAccion---->getState()=', getState().pokemones); 
*/


   const offset= getState().pokemones.offset+ numero; /* o se puede leer como const {offset}= getState().pokemones;*/


    try {
        const resp= await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO, 
            payload:{array:resp.data.results, offset: offset}
        })
    }catch(error){
        console.log(error);
    }
}

export const anteriorPokemonAccion = (numero) => async (dispatch,getState)=>{
/*
        dispatch({
            type: ANTERIOR_POKEMON_ACCION, 
            payload: getState().pokemones.offset -20
        })
    
        console.log('anteriorPokemonAccion---->getState()=', getState().pokemones); 
*/    
        const offset= getState().pokemones.offset-numero ; /* o se puede leer como const {offset}= getState().pokemones;*/
    
    
        try {
            const resp= await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
            dispatch({
                type: OBTENER_POKEMONES_EXITO, 
                payload:{array:resp.data.results, offset: offset}
            })
        }catch(error){
            console.log(error);
        }
}