import React, { Component } from 'react'
import LifeCycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Kartik'
        }
        console.log('LifeCycleA constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
    }

    // These 3 methods added later
    shouldComponentUpdate() {
        console.log('LifeCycleA ShouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA ShouldComponentUpdate');
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate');
    }
    changeState = () =>{
        this.setState({
            name: 'Kartik 2'
        })
    }
    render() {
        console.log('lifecycleA render')

        return (
            <div>
                <div>
                    LifeCycleA
                </div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifecycleA
