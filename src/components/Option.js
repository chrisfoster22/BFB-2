import React, { Component } from 'react';

export default class Option extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    componentWillReceiveProps(nextProps) {
        let selected = false;
        if (nextProps.option.name) {
            if (nextProps.step.selection.name) {
                selected = nextProps.step.selection.name.indexOf(nextProps.option.name) > -1
            }
        } else {
            selected = nextProps.step.selection.indexOf(nextProps.option) > -1
        }
        this.setState({selected})
    }

    render() {
        let text = this.props.option.name || this.props.option;
        let height = this.state.selected ? "60%" : 0;
        let width = this.state.selected ? "60%" : 0;
        let fontWeight = ["none", "unscented"].indexOf(text) > -1 ? "bold" : 300;

        return(
            <div style={{...styles.option, fontWeight: fontWeight}} onClick={this.onChoose.bind(this)}>
                <span style={styles.optionBtn}>
                    <span style={{...styles.selectedBtn, height: height, width: width}}></span>
                </span>
                {text}
            </div>
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
      display: "flex",
      margin: "15px 0",
      color: "#3F4345",
      textTransform: "capitalize",
      fontWeight: 300,
      cursor: "pointer"
  },
  optionBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      border: "1px solid #3F4345",
      borderRadius: "50%",
      marginTop: 3,
      marginRight: 20
  },
  selectedBtn: {
      display: "inline-block",
      width: 0,
      height: 0,
      borderRadius: "50%",
      transition: "all .5s",
      backgroundColor: "#3F4345"
  }
}
