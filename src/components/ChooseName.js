import React, { Component } from 'react';

export default class ChooseName extends Component {

    render() {
        return(
            <div>
                <div>Choose Name</div>
                <input type="text" onChange={this.onTextChange.bind((this))} />
            </div>
        )
    }
    
    onTextChange(e) {
        this.props.onChoose(e.target.value);
    }
}