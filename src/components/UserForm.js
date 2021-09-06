import React, { useState } from 'react'
import UseInput from '../Hooks/UseInput'

function UserForm() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = UseInput('')
    const [lastName, bindLastName, resetLastName] = UseInput('')


    const submitHandler = e  => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    First name
                    <input {...bindFirstName}  type="text" />

                </div>
                <div>
                    Last name
                    <input {...bindLastName} type="text" />

                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
