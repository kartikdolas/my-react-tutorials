import React, { Component } from 'react'
import axios from 'axios'


class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId:'',
            title:'',
            body:'',
        }
    }
    changeHandler = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((res)=>{
            console.log(res);
        })
        .catch((er)=>{
            console.log(er);

        })
    }

    render() {
        const { userId, title,body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" defaultValue={userId} placeholder="userId" name="userId" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" defaultValue={title} placeholder="title" name="title" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" defaultValue={body} placeholder="body" name="body" onChange={this.changeHandler} />
                    </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
