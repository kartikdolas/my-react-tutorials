import React,{Component} from 'react'

// const Welcome = (probes) =>{
//     console.log(probes)
//     return(
//         <div>
//             <p>
//             Welcome {probes.name}, your age is {probes.age}
//             </p>
//         </div>
//     )

// }

// DESTRUCTURING

// const Welcome = ({name, age}) =>{
//     return(
//         <div>
//             <p>
//             Welcome {name}, your age is {age}
//             </p>
//         </div>
//     )

// }

const Welcome = (props) =>{
    const {name, age} = props
    return(
        <div>
            <p>
            Welcome {name}, your age is {age}
            </p>
        </div>
    )

}
export default Welcome