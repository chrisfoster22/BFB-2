import React, { Component } from 'react';

export default class Option extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.step.selection.indexOf(this.props.option) > -1
        }
    }
    
    render() {
        let text = this.props.option.name || this.props.option
        return(
            <div style={styles.option} onClick={this.onChoose.bind(this)}>{text}</div>
        )
    }
    
    onChoose() {
        if (!this.props.step.limit) {
            this.props.chooseProduct(this.props.step.type, this.props.option, false);
        } else if (this.state.selected) {
            this.props.unChooseProduct(this.props.step.type, this.props.option);
        } else if (["none", "unscented"].indexOf(this.props.option) > -1 || this.props.step.selection.length < this.props.step.limit) {
            this.props.chooseProduct(this.props.step.type, this.props.option, true);
        }
    }
}

const styles = {
  option: {
    margin: "15px 0",
    color: "#3F4345",
    textTransform: "capitalize",
    fontWeight: "300",
    cursor: "pointer"
  }
}
