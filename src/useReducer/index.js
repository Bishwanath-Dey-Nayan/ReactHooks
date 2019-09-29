import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                firstCounter: state.firstCounter + 1
            }
        case 'decrement':
            return {
                ...state,
                firstCounter: state.firstCounter - 1
            }
        case 'reset':
            return initialState;
        default:
            return state
    }
}

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (<div>
        <h3>{count.firstCounter}</h3>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>)
}

export default UseReducer;