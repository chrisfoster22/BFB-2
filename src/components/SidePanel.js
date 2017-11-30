import React, { Component } from 'react';
import logo from '../assets/logo.svg';

import recipientIcon from '../assets/icons/recipient.svg';
import focusAreaIcon from '../assets/icons/focusArea.svg';
import productIcon from '../assets/icons/product.svg';
import scentsIcon from '../assets/icons/scents.svg';
import oilsIcon from '../assets/icons/oils.svg';
import buttersIcon from '../assets/icons/butters.svg';
import boostersIcon from '../assets/icons/boosters.svg';

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
        this.colors = Products.colors;
    }

    render() {

        let stepDivs = this.steps.map((step, i) => {
            let selected = this.props.selection[step.type].name ? this.props.selection[step.type].name : this.props.selection[step.type];
            if (selected.join) {
                selected = selected.map((multiChoice, i) => {
                    return (
                        <div key={i} style={styles.multiChoice}>
                            <div style={{...styles.multiChoiceColor, backgroundColor: this.colors[multiChoice]}}> </div>
                            <span style={styles.multiChoiceText}>{multiChoice}</span>
                        </div>
                    )
                })
            }
            let opacity = selected.length > 0 ? 1 : 0;
            return(
                <div key={i} style={styles.stepContainer}>
                    <div style={styles.step}>
                        <span style={{...styles.icon, backgroundImage: `url(${step.icon}`}}></span>
                        {step.text}
                    </div>
                    <div style={{...styles.selected, opacity: opacity}}>{selected}</div>
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
        minHeight: 75,
        marginBottom: 15
    },
    step: {
        display: "flex",
        fontSize: 18,
        color: "#A1A9AD",
        cursor: "default"
    },
    selected: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        fontSize: 20,
        fontWeight: 300,
        textTransform: "capitalize",
        transition: "all .7s"
    },
    multiChoice: {
        display: "inline-block",
        minWidth: 100,
        marginRight: "5%",
        fontSize: 14
    },
    multiChoiceColor: {
        width: "100%",
        height: 9,
        borderRadius: 100,
        marginTop: 5,
        marginBottom: 5,
        WebkitAnimation: "scrollIn 0.5s",
        MozAnimation: "scrollIn 0.5s",
        animation: "scrollIn 0.5s"
    },
    multiChoiceText: {
        opacity: 1,
        WebkitAnimation: "fadeIn 0.5s",
        MozAnimation: "fadeIn 0.5s",
        animation: "fadeIn 0.5s"
    },
    icon: {
        height: 20,
        width: 20,
        display: "inline-block",
        margin: "1px 10px 0 0",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
}
