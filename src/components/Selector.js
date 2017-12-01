import React, { Component } from 'react';
import Option from './Option';

export default class Selector extends Component {

    render() {
        let fontSize = this.props.options.length > 10 ? 16 : 20
        let options = this.props.options.map((option, i) => {
            let selected = this.props.selection.indexOf ? this.props.selection.indexOf(option) > -1 : this.props.selection.name.indexOf(option.name) > -1;
            return(
                <Option
                    chooseProduct={this.props.chooseProduct.bind(this)}
                    unChooseProduct={this.props.unChooseProduct.bind(this)}
                    fontSize={fontSize}
                    key={i}
                    option={option}
                    step={this.props.step}
                    selected={selected} />
            )
        });
        return(
            <div style={styles.optionsContainer}>
                <h2 style={styles.message}>{this.props.step.message}</h2>
                <div style={this.props.mobile ? {...styles.options, ...styles.optionsMobile} : {...styles.options, height: this.props.height, fontSize: fontSize}}>{options}</div>
            </div>
        )
    }
}

const styles = {
  optionsContainer: {
      padding: 30,
      maxWidth: 800
  },
  options: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      height: 300,
      minHeight: 200,
      overflowY: "scroll"
  },
  optionsMobile: {
    paddingBottom: "10%",
    height: 600
  },
  message: {
      marginBottom: 30,
      color: "#3F4345",
      fontSize: 20,
      fontWeight: 300,
      fontStyle: "italic"
  }
}
