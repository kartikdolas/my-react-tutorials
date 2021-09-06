import React,{useState} from 'react'
import useCounter from '../Hooks/useCounter'

function CounterTwo() {
   const [count, increment,decrement,reset] = useCounter(10,2)
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default CounterTwo
