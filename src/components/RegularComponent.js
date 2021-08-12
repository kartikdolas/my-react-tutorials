import React, { Component } from 'react'

 class RegularComponent extends Component {
    render() {
        console.log('Reg Component');

        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
