import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {obtenerPokemonesAccion} from '../../redux/pokeDucks';
import {siguientePokemonAccion} from '../../redux/pokeDucks';
import {anteriorPokemonAccion} from '../../redux/pokeDucks';
import store  from '../../redux/store';

const Pokemones = () => {
    const dispatch = useDispatch();
    
    const pokemones_puro=useSelector(store=>store);
    const pokemones=useSelector(store=>store.pokemones.array);

    console.log('pokemones_puro=', pokemones_puro);
    console.log('pokemones=', pokemones);
    

    return (
        <div>
            <h1>Lista de Pokemones</h1>
            <button onClick={()=> dispatch(obtenerPokemonesAccion())}> Get Pokemones</button>
            <button onClick={()=> dispatch(siguientePokemonAccion(20))}> Siguiente Pokemones</button>
            <button onClick={()=> dispatch(anteriorPokemonAccion(20))}> Anterior Pokemones</button>
        <ul>
            {
            pokemones.map((pok)=>(
                <li key={pok.name} > {pok.name}</li>
            ))
            }
        </ul>
        </div>
    )
}
export default Pokemones;