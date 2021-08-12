import React from 'react';

function Person({person, key}) {
    return (
        <div>
               <p>I am {person.name}. My ID is {person.id}</p> 
        </div>
    );
}

export default Person;