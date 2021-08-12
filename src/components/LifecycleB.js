import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Kartik'
        }
        console.log('LifeCycleB constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('componentDidMount');
    }
        // These 3 methods added later
        shouldComponentUpdate() {
            console.log('LifeCycleB ShouldComponentUpdate');
            return true
        }
    
        getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('LifeCycleB ShouldComponentUpdate');
            return null

        }
        componentDidUpdate() {
            console.log('LifeCycleB componentDidUpdate');
        }
    
    render() {
        console.log('LifeCycleB render')

        return (
            <div>
              LifeCycleB  
            </div>
        )
    }
}

export default LifeCycleB
