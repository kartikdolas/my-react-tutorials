import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[],
              errorMessage:''
         }
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res =>{
             this.setState({posts:res.data})
         })
         .catch(err=>{
            console.log(err);
            this.setState({errorMessage: 'Error retrieving data'})
         })
     }
     
    render() {
        const {posts, errorMessage} = this.state
        return (

            <div>
               List of Posts 
               {
                   posts.length? 
                   posts.map(x =><div key ={x.id}>{x.id} {x.title}</div>): 'Zero posts'
               }
               {
                   errorMessage? <div>{errorMessage}</div> : null
               }
            </div>
        )
    }
}

export default PostList
