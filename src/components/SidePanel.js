import React, { Component } from 'react';

import recipientIcon from '../assets/icons/recipient.png';
import focusAreaIcon from '../assets/icons/focusArea.png';
import productIcon from '../assets/icons/product.png';
import scentsIcon from '../assets/icons/scents.png';
import oilsIcon from '../assets/icons/oils.png';
import buttersIcon from '../assets/icons/butters.png';
import boostersIcon from '../assets/icons/boosters.png';

export default class SidePanel extends Component {

    constructor(props) {
        super(props);
        this.steps = [
            {type: "recipient", text: "Recipient Type", icon: recipientIcon},
            {type: "focusArea", text: "Focus Area", icon: focusAreaIcon},
            {type: "product", text: "Product Type", icon: productIcon},
            {type: "scents", text: "Scents", icon: scentsIcon},
            {type: "oils", text: "Oils", icon: oilsIcon},
            {type: "butters", text: "Butters", icon: buttersIcon},
            {type: "boosters", text: "Boosters", icon: boostersIcon}
        ]
    }

    render() {
        let currentStep = this.props.current - 1;

        let stepDivs = this.steps.map((step, i) => {
            let selected = this.props.selection[step.type].name ? this.props.selection[step.type].name : this.props.selection[step.type];
            if (selected.join) {
                selected = selected.map((choice) => {
                    return <span style={styles.choice}>{choice}</span>
                })
            }
            return(
                <div style={styles.stepContainer}>
                    <div style={i === currentStep ? {...styles.step, ...styles.currentStep} : styles.step} key={i}><span style={{...styles.icon, backgroundImage: `url(${step.icon}`}}></span>{step.text}</div>
                    <div style={styles.selected}>{selected}</div>
                </div>
            )
        })

        return(
            <div style={styles.sidePanel}>{stepDivs}</div>
        )
    }

}

const styles = {
    sidePanel: {
        padding: "45px"
    },
    stepContainer: {
        height: "75px",
        marginBottom: "15px"
    },
    step: {
        fontSize: "18px",
        color: "#A1A9AD",
        cursor: "default",
        position: "relative"
    },
    currentStep: {
        color: "#3F4345"
    },
    selected: {
        padding: "10px 0",
        fontSize: "24px",
        fontWeight: "300",
        textTransform: "capitalize"
    },
    choice: {
        display: "inline-block",
        minWidth: 100
    },
    icon: {
        height: "30px",
        width: "30px",
        display: "inline-block",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "absolute",
        left: -36,
        top: -4
    }
}
