import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

export class Parent1Component extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Kartik'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Kartik'
            })
        },2000)
    }
    
    render() {
        console.log('Parent1Component');
        return (
            <div>
                Parent1Component
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default Parent1Component
