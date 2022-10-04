import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { getPokemons,deletePokemon } from '../helpers/pokemonsAPI'

const useGetPokemons = (  ) => {

    const isMounted = useRef(true);
    const  [ state, setState ] = useState({
        data:[],
        loading:true,
    })

    //Hace referencia al objeto, si se muestra en pantalla esta en true sino en false
    useEffect(()=>{
        return () => {
            isMounted.current = false;
        }
    },[])


    useEffect(()=>{
        getPokemons()
            .then( (resp) =>{

                if( isMounted.current ){
                    setState({
                        data:resp,
                        loading:false
                    })
                }
            })

    },[])

    return state
}

export {
    useGetPokemons,
}