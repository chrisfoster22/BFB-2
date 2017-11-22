import React, { Component } from 'react';

export default class Selector extends Component {


    render() {
        console.log();
        let options = [];
        // let options = this.props.options.map((option, i) => {
        //     return <div key={i}>{option}</div>
        // })

        return(
            <div>
                <h2>{this.props.step.message}</h2>
                <div>{options}</div>
                <button onClick={this.props.nextStep} />
            </div>
        )
    }
}
