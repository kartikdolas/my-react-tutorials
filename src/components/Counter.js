import React,{Component} from 'react';

class Counter extends Component {
    add() {
        // this.setState({
        //     count:this.state.count+1
        // },
        // ()=>{
        //     console.log('Callback value', this.state.count)
        // }) 

        this.setState(prevState =>({
            count : prevState.count +1
        }))
        console.log(this.state.count);
    }
    constructor(){
        super()

        this.state ={
            count:0
        }


        

    }

    render(){
        return(
            <div>
                <p>Count :{this.state.count} </p>
                <button onClick={()=>{this.add()}}>Click to Add</button>
            </div>
        )
    }

}

export default Counter