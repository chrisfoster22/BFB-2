import React, { Component } from 'react';

export default class Steps extends Component {
    
    
    render() {
        let steps = ["Recipient Type", "Focus Area", "Product Type", "Scents", "Oils", "Butters", "Boosters"]
        let currentStep = this.props.current - 1
        
        let stepDivs = steps.map((step, i) => {
            return(
                <div style={ i === currentStep ? styles.currentStep : styles.step } key={i}>{step}</div>    
            ) 
        })
        
        return(
            <div>{stepDivs}</div>
        )
    }
    
} 

const styles = {
    step: {
        color: "grey"    
    },
    currentStep: {
        color: "black"
    }
}