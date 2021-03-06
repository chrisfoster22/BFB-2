import React, { Component } from 'react';

export default class Option extends Component {

    render() {
        let text = this.props.option.name || this.props.option;
        let height = this.props.selected ? "60%" : 0;
        let width = this.props.selected ? "60%" : 0;
        let fontWeight = ["none", "unscented"].indexOf(text) > -1 ? "bold" : 300;
        let borderRadius = this.props.step.limit ? 0 : "50%";
        return(
            <div style={{...styles.option, fontWeight: fontWeight}} onClick={this.onChoose.bind(this)}>
                <span style={{...styles.optionBtn, borderRadius: borderRadius}}>
                    <span style={{...styles.selectedBtn, height: height, width: width, borderRadius: borderRadius}}></span>
                </span>
                <span style={{display: "flex", alignItems: "center"}}>{text}
                    {["recipient", "focusArea", "product"].indexOf(this.props.step.type) === -1 && ["none", "unscented"].indexOf(text) === -1 && <span style={styles.detailBtn} onClick={this.optionDetail.bind(this)}>?</span> }
                </span>
            </div>
        )
    }
    
    optionDetail(e) {
      e.stopPropagation();
      let text = this.props.option.name || this.props.option;
      this.props.toggleModal(text)
    }

    onChoose() {
        if (!this.props.step.limit) {
            this.props.chooseProduct(this.props.step.type, this.props.option, false);
        } else if (this.props.selected) {
            this.props.unChooseProduct(this.props.step.type, this.props.option);
        } else if (["none", "unscented"].indexOf(this.props.option) > -1 || this.props.step.selection.length < this.props.step.limit) {
            this.props.chooseProduct(this.props.step.type, this.props.option, true);
        }
    }
}

const styles = {
  option: {
      display: "flex",
      alignItems: "center",
      margin: "10px 4px",
      color: "#3F4345",
      textTransform: "capitalize",
      fontWeight: 300,
      cursor: "pointer"
  },
  optionBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      border: "1px solid #3F4345",
      marginRight: 15
  },
  selectedBtn: {
      display: "inline-block",
      width: 0,
      height: 0,
      transition: "all .5s",
      backgroundColor: "#3F4345"
  },
  detailBtn: {
      display: "inline-block",
      position: "relative",
      zIndex: 3,
      height: "10px",
      width: "10px",
      border: "1px solid black",
      borderRadius: "33px",
      marginLeft: 5,
      fontSize: "10px",
      lineHeight: "12px",
      textAlign: "center",
  }
}
