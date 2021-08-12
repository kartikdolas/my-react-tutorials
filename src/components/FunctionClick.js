import React from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log('button clicked');
    }
    return(
        <div>
            <p>On click Event</p>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick