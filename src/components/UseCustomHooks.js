import React, { useEffect, useState } from 'react'
import useCounter from '../hooks/useCounter'
import useInputChange from '../hooks/useInputChange';
import useAxios from '../hooks/useAxios';

const UseCustomHooks = () => {

    const { state, increment, decrement, reset } = useCounter(5);
    const { input } = useInputChange('gordo','puto')

    const url = 'https://poke-apix.herokuapp.com/api/pokemon/'
    const {data, loading} = useAxios(url,'get'); 

    data && console.log(data)

  return (
    <div>
        {/* <p>{ state }</p>
        
        <button 
            onClick={ () => { increment(2)}} 
        > 
        Sumarphite
        </button>

        <button 
            onClick={ reset } 
        > 
        Resetearphite
        </button>

        <button 
            onClick={ () => { decrement(1)}} 
        > 
        Restarphite
        </button> */}

        
    </div>
  )
}

export default UseCustomHooks