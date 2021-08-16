import React, {useState,useEffect} from 'react'

function EffectCounter() {
    const [count, setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(() => {
        console.log('useEffect - ');
        document.title = `You clicked ${count} times`
    },[count])
    // array of parameters is second parameter, if it doesn't change with renders; effect doesn't run.
    
    return (
        <div>
            <input type ="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={() =>setCount(count+1)}>Count{count}</button>
        </div>
    )
}

export default EffectCounter
