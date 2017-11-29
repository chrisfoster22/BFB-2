import React, { Component } from 'react';

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
                <div>
                    <div style={i === currentStep ? {...styles.step, ...styles.currentStep} : styles.step} key={i}>{step.text}</div>
                    <div>{selected}</div>
                </div>
            ) 
        })

        return(
            <div>{stepDivs}</div>
        )
    }

}

const styles = {
    step: {
        fontSize: "18px",
        fontWeight: "300",
        color: "#A1A9AD",
        cursor: "default"
    },
    currentStep: {
        color: "#3F4345"
    }
}
