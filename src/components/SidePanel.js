import React, { Component } from 'react';
import logo from '../assets/logo.svg';

export default class SidePanel extends Component {

    constructor(props) {
        super(props);
        this.steps = [
            {type: "recipient", text: "Recipient Type"},
            {type: "focusArea", text: "Focus Area"},
            {type: "product", text: "Product Type"},
            {type: "scents", text: "Scents"},
            {type: "oils", text: "Oils"},
            {type: "butters", text: "Butters"},
            {type: "boosters", text: "Boosters"}
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
                    <div style={styles.step} key={i}>{step.text}</div>
                    <div style={styles.selected}>{selected}</div>
                </div>
            )
        })

        return(
            <div style={styles.sidePanel}>
                <img style={styles.logo} src={logo}/>
                <div>{stepDivs}</div>
            </div>
        )
    }
}

const styles = {
    sidePanel: {
        padding: "10%"
    },
    logo: {
        marginBottom: "45px"
    },
    stepContainer: {
        height: "75px",
        marginBottom: "15px"
    },
    step: {
        fontSize: "18px",
        color: "#A1A9AD",
        cursor: "default"
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
    }
}
