import React, { Component } from 'react';

export default class Button extends Component {

render() {
    
    let btnStyles;
    if (this.props.link) {
        btnStyles = {...styles.link, ...styles.buttonSecondary};
        if (this.props.hidden) {
            btnStyles = {btnStyles, visibility: "hidden"}
        }
    }
    else if (this.props.disabled) {
        btnStyles = {...styles.button, ...styles.buttonSecondary, cursor: "not-allowed"};
    } else {
        btnStyles = {...styles.button, ...styles.buttonPrimary};
    }
    
    if (this.props.cartUrl) {
        return(
            <a href={this.props.cartUrl}><button disabled={this.props.disabled} style={btnStyles}>Add to Cart</button></a>
        )
    }

    return(
        <button disabled={this.props.disabled} style={btnStyles} onClick={this.props.click}>{this.props.text}</button>
    )
}

}



const styles = {
    button: {
        width: 200,
        height: 50,
        border: "1px solid #24C6DC",
        borderRadius: 100,
        boxShadow: "0 6px 10px 0 rgba(0,0,0,0.18)",
        cursor: "pointer"
    },
    buttonPrimary: {
        color: "#FFFFFF",
        background: "#24C6DC",
        transition: "all .8s"
    },
    buttonSecondary: {
        color: "#24C6DC",
        background: "#FFFFFF"
    },
    link: {
        border: "none",
        cursor: "pointer"
    }
}
