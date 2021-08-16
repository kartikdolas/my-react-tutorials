import React, {useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(()=>{
        console.log('useEffect Called');
        window.addEventListener('mouseover',logMousePosition)
        return ()=>{
            console.log('Component unmount');
            window.removeEventListener('mouseover',logMousePosition)

        }
    },[])

    return (
        <div>
            Hooks X - {x},Y -{y}
        </div>
    )
}

export default HookMouse
