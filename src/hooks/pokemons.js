import axios from 'axios'
import { useEffect, useState } from 'react'
import { getPokemons } from '../helpers/pokemonsAPI'

const useGetPokemons = (  ) => {
    const  [ state, setState ] = useState({
        data:[],
        loading:true,
    })

    useEffect(()=>{
        getPokemons()
            .then( (resp) =>{
                setState({
                    data:resp,
                    loading:false
                })
            })
    },[])

    return state
}

export {
    useGetPokemons,
}