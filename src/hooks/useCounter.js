import { useState } from "react"


const useCounter = ( initialState = 1 ) => {

    const [state, setState] = useState( initialState );

    const increment = ( factor ) => {
        setState( state + factor )
    }

    const decrement = ( factor ) => {
        setState( state - factor )
    }

    const reset = ( ) => {
        setState( initialState )
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}

export default useCounter