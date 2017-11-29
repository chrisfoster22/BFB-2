import React, { Component } from 'react';

export default class ChooseName extends Component {

    render() {
        return(
            <div style={styles.chooseNameContainer}>
                <label style={styles.chooseNameLabel} htmlFor="product">Name Your Product</label>
                <input style={styles.chooseNameInput} type="text" name="product" id="product" autoComplete="off" onChange={this.onTextChange.bind((this))} />
            </div>
        )
    }

    onTextChange(e) {
        this.props.onChoose(e.target.value);
    }
}

const styles = {
    chooseNameContainer: {
      display: "relative",
      width: "75%",
      margin: "0 auto",
      fontWeight: 300
    },
    chooseNameLabel: {
      color: "#A1A9AD"
    },
    chooseNameInput: {
        width: "100%",
        border: "none",
        borderBottom: "1px solid #3F4345",
        margin: "10px auto",
        fontSize: 40,
        fontWeight: 300
    }
}
