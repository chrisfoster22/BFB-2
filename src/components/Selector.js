import React, { Component } from 'react';

export default class Selector extends Component {


    render() {
        if (this.props.step.type === "product") {
            return this.renderProducts();
        }

        let options = this.props.options.map((option, i) => {
            let color = "white";
            if (typeof this.props.selection === "object" && this.props.selection.indexOf(option) > -1) {
                color = "green";
            }
            return <div style={{backgroundColor: color}} onClick={onChoose.bind(this)} key={i}>{option}</div>
            function onChoose() {
                if (!this.props.step.limit) {
                    this.props.chooseProduct(this.props.step.type, option, false);
                } else if (this.props.step.selection.indexOf(option) > -1) {
                    this.props.unChooseProduct(this.props.step.type, option);
                } else if (["none", "unscented"].indexOf(option) > -1 || this.props.step.selection.length < this.props.step.limit) {
                    this.props.chooseProduct(this.props.step.type, option, true);
                }
            }
        })
        return(
            <div>
                <h2>{this.props.step.message}</h2>
                <div>{options}</div>
                <button style={{...styles.button, ...styles.buttonPrimary}} onClick={this.props.nextStep}>Next</button>
                {this.props.step.type && <button style={{...styles.link, ...styles.buttonSecondary}} onClick={this.props.prevStep}>{'<  Back'}</button> }
            </div>
        )
    }

    renderProducts() {
        let options = this.props.options.map((option, i) => {
            return(<div
                onClick={onChoose.bind(this)}
                key={i}>
                {option.name}
                {option.options === false && <span>(Cannot be further customized)</span>}
                </div>
            )
            function onChoose() {
                this.props.chooseProduct(this.props.step.type, option, false);
            }
        })
        return(
            <div>
                <h2>{this.props.step.message}</h2>
                <div>{options}</div>
                <button style={{...styles.button, ...styles.buttonPrimary}} onClick={this.props.nextStep}>Next</button>
                {this.props.step.type && <button style={{...styles.link, ...styles.buttonSecondary}} onClick={this.props.prevStep}>{'<  Back'}</button> }
            </div>
        )
    }
}

const styles = {
  button: {
    width: "200px",
    height: "50px",
    border: "1px solid #24C6DC",
    borderRadius: "100px",
    boxShadow: "0 6px 10px 0 rgba(0,0,0,0.18)",
    cursor: "pointer"
  },
  buttonPrimary: {
    color: "#FFFFFF",
    background: "#24C6DC",
  },
  buttonSecondary: {
    color: "#24C6DC",
    background: "#FFFFFF",
  },
  link: {
    border: "none",
    cursor: "pointer"
  }
}
