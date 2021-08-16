import React,{useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstname:'',lastname:''})

    return (
        <div>
            <form>
                <input type ="text" value={name.firstname}
                 onChange={e=>setName({ ...name, firstname:e.target.value})}/>
                <input type ="text" value={name.lastname}
                onChange={e=>setName({ ...name,lastname:e.target.value})}/>
                <p>Your firstname is {name.firstname}</p>
                <p>Your lastname is {name.lastname}</p>
                <p>{JSON.stringify(name)}</p>

            </form>
            
        </div>
    )
}

export default HookCounterThree
