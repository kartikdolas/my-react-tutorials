import React,{useState, useEffect, useRef} from 'react'

function HookFunctionalTimer() {
    const [timer,setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(()=>{
         intervalRef.current = setInterval(() =>{
            setTimer(prevTimer => prevTimer+1)
        },1000)
        return () =>{
            clearInterval(intervalRef.current)
        };
    },[])
    return (
        <div>
            Hook Timer - {timer}
            <button onClick={()=> clearInterval(intervalRef.current)}>Clear</button>
        </div>
    )
}

export default HookFunctionalTimer
