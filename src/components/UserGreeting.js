import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggeIn: true
        }
    }

    render() {
        // IF ELSE APPROACH STARTS
        // if (this.state.isLoggeIn) {
        //     return (
        //         <div>
        //             Welcome Kartik, this is conditional rendering.
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest, this is conditional rendering.
        //         </div>
        //     )
        // }

        // JS VARIABLE
        // let message
        // if (this.state.isLoggeIn) {
        //     message = <div>Welcome Kartik</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // IF ELSE APPROACH STARTS
        // return (
        //     <div>
        //         <div>
        //             Welcome Kartik, this is conditional rendering.
        //         </div>
        //         <div>
        //             Welcome Guest, this is conditional rendering.
        //         </div>
        //     </div>

        // );

        //
        return(
            this.state.isLoggeIn?
            <div>Welcome Kartik</div>:
            <div>Welcome Guest</div>
        )

    }
}

export default UserGreeting;