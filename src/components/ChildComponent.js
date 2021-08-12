import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <p>Calling a method in ParentComponent from a button in child componet by passing the method as props to child component.</p>
           <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button> 
        </div>
    );
}

export default ChildComponent;