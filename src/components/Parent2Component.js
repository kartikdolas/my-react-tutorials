import React, {useState} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function Parent2Component() {

    const[age,setAge]  = useState(25)
    const[salary,setSalary]  = useState(50000)


    const incrementAge = () =>{
        setAge(age+1)
    }

    const incrementSalary = () =>{
        setSalary(salary+1000)
    }
    return (
        <div>
            <Title />
            <Count text ="Age" count = {age} />
            <Button handleClick = {incrementAge}>Increment Age</Button>
            <Count text ="Salary" count = {salary} />
            <Button text="Salary" handleClick={incrementSalary}>Increment Salary</Button>
            
        </div>
    )
}

export default Parent2Component
