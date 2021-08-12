import React from 'react';
import Person from './Person';

function List(props) {
    const names = ['Bruce','Clark','Diana'];
    const persons = [{id:1,name:'Alan'},{id:2,name:'Bruce'},{id:3,name:'Cork'}];
    const personList =  persons.map( person =>
        <Person key = {person.id} person={person}/>
    )

    const nameList =  names.map( (name,index) =><p key ={index}>{index} {name}</p>)
    return <div>{nameList}</div>


    // return (
    //     <div>
    //         <h1>List Rendering</h1>
    //         {personList}
    //     </div>
    // );
}

export default List;