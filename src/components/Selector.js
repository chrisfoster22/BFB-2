import React, { Component } from 'react';
import Option from './Option';

export default class Selector extends Component {


    render() {
        let options = this.props.options.map((option, i) => {
            return(
                <Option 
                    chooseProduct={this.props.chooseProduct.bind(this)}
                    key={i}
                    option={option}
                    step={this.props.step} />
            )
        });
        return(
            <div>{options}</div>
        )
    }

}