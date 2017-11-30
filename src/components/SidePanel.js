import React, { Component } from 'react';
import logo from '../assets/logo.svg';

import recipientIcon from '../assets/icons/recipient.png';
import focusAreaIcon from '../assets/icons/focusArea.png';
import productIcon from '../assets/icons/product.png';
import scentsIcon from '../assets/icons/scents.png';
import oilsIcon from '../assets/icons/oils.png';
import buttersIcon from '../assets/icons/butters.png';
import boostersIcon from '../assets/icons/boosters.png';

import Products from '.././data/products';

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

        let stepDivs = this.steps.map((step, i) => {
            let selected = this.props.selection[step.type].name ? this.props.selection[step.type].name : this.props.selection[step.type];
            if (selected.join) {
                selected = selected.map((multiChoice, i) => {
                    return <span key={i} style={styles.multiChoice}>{multiChoice}</span>
                })
            }
            return(
                <div key={i} style={styles.stepContainer}>
                    <div style={styles.step}><span style={{...styles.icon, backgroundImage: `url(${step.icon}`}}></span>{step.text}</div>
                    <div style={styles.selected}>{selected}</div>
                </div>
            )
        })

        return(
            <div style={styles.sidePanel}>
                <img style={styles.logo} src={logo} alt="Best Friend Beauty Logo"/>
                <div>{stepDivs}</div>
            </div>
        )
    }
}

const styles = {
    sidePanel: {
        padding: "5% 10%"
    },
    logo: {
        marginBottom: 45
    },
    stepContainer: {
        height: 75,
        marginBottom: 15
    },
    step: {
        display: "flex",
        fontSize: 18,
        color: "#A1A9AD",
        cursor: "default",
    },
    selected: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        fontSize: 24,
        fontWeight: 300,
        textTransform: "capitalize"
    },
    multiChoice: {
        display: "inline-block",
        minWidth: 100,
        fontSize: 14,
        transition: "all 1s"
    },
    icon: {
        height: 30,
        width: 30,
        display: "inline-block",
        margin: "-2px 10px 0 0",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
}
