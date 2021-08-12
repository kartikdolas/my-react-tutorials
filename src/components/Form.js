import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'ReactJS'

        }


    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    handlerUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlerCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handlerTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Form Component</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type='text' value={this.state.username} onChange={this.handlerUsernameChange}></input>
                    </div>

                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.handlerCommentsChange}></textarea>
                    </div>

                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handlerTopicChange}>
                            <option value='Angular'>Angular</option>
                            <option value='Vue'>Vue</option>
                            <option value='ReactJS'>ReactJS</option>

                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
