import React, { Component } from 'react';
import Option from './Option';

export default class Selector extends Component {
  
  componentWillReceiveProps(nextProps) {
    let num = 1;
    if (nextProps.stepNum < this.props.stepNum) {
      num = -1;
    }
    if (nextProps.stepNum > 3 && nextProps.product && nextProps.product.skip && nextProps.product.skip.indexOf(nextProps.step.type) > -1) {
      this.props.chooseProduct(this.props.step, "none", false, num);
    }
  }
  
  componentWillMount() {
      if (this.props.product && this.props.product.skip &&  this.props.product.skip.indexOf(this.props.step.type > -1)) {
          this.props.chooseProduct(this.props.step, "none", false, -1);
      }
  }

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
                    selected={selected} 
                    toggleModal={this.props.toggleModal}/>
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
      minHeight: 200
  },
  optionsMobile: {
      marginBottom: "20%",
      height: "auto",
      maxHeight: 600
  },
  message: {
      marginBottom: 30,
      color: "#3F4345",
      fontSize: 20,
      fontWeight: 300,
      fontStyle: "italic"
  }
}
