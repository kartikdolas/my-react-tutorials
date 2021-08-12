import React,{Component} from 'react'

class Message extends Component{
    constructor()
    {
        super()

        this.state ={
            message:'Click here to subscribe'
        }
    }
    changeState(){
        this.setState({
            message:'Thanks for subscription'
        })
    }
    revertState(){
        this.setState({
            message:'Click here to subscribe'
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={()=>this.changeState()}>Subscribe</button>
                <button onClick={()=>this.revertState()}>Unsubscribe</button>

            </div>
        )
    }
}

export default Message