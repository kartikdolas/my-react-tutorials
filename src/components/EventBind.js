import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hello'
        }
        this.HandlerFn = this.HandlerFn.bind(this)
    }
    HandlerFn(){
        this.setState({
            message:'Good Bye'
        })

    }
    

    render() {
        return (
            <div>
                <p>Event Handlers</p>
                <p>{this.state.message}</p>
                <button onClick={this.HandlerFn.bind(this)}>click</button>
                <button onClick={()=>this.HandlerFn()}>click</button>
                <button onClick={this.HandlerFn}>click</button>


                
            </div>
        );
    }
}

export default EventBind;