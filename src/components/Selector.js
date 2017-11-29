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
            <div style={styles.optionsContainer}>
                <h2 style={styles.message}>{this.props.step.message}</h2>
                <div>{options}</div>
            </div>
        )
    }
}

const styles = {
  optionsContainer: {
      padding: "30px",
  },
    message: {
        marginBottom: "30px",
        color: "#3F4345",
        fontSize: "20px",
        fontWeight: "300",
        fontStyle: "italic"
    }
}
