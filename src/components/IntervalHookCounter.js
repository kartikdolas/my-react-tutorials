import React,{useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count+1)
    }

    useEffect(() => {
        // this is how we should declare functions in useEffect
        // function doSomething (){
        //     console.log(SomeProp)
        // }
        // doSomething()
        const interval = setInterval(tick,1000)
        return () =>{
            clearInterval(interval)
        } 
    }, [count
        // SomeProp
    ])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
