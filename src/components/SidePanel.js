import React, { Component } from 'react';

export default class SidePanel extends Component {


    render() {
        let steps = ["Recipient Type", "Focus Area", "Product Type", "Scents", "Oils", "Butters", "Boosters"]
        let currentStep = this.props.current - 1

        let stepDivs = steps.map((step, i) => {
            return(
                <div style={ i === currentStep ? {...styles.step, ...styles.currentStep} : styles.step} key={i}>{step}</div>
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
