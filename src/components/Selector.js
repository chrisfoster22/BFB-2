import React, { Component } from 'react';
import Option from './Option';

export default class Selector extends Component {

    render() {
        let options = this.props.options.map((option, i) => {
            return(
                <Option
                    chooseProduct={this.props.chooseProduct.bind(this)}
                    unChooseProduct={this.props.unChooseProduct.bind(this)}
                    key={i}
                    option={option}
                    step={this.props.step} />
            )
        });
        return(
            <div style={styles.optionsContainer}>
                <h2 style={styles.message}>{this.props.step.message}</h2>
                <div style={{...styles.options, height: this.props.height}}>{options}</div>
            </div>
        )
    }
}

const styles = {
  optionsContainer: {
        padding: 30
  },
  options: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: 300
  },
    message: {
        marginBottom: 30,
        color: "#3F4345",
        fontSize: 20,
        fontWeight: 300,
        fontStyle: "italic"
    }
}
