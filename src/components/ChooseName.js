import React, { Component } from 'react';

export default class ChooseName extends Component {
    
    constructor(props) {
        super(props);
        this.state = {cartUrl: "", focused: true}
    }
    
    componentWillMount() {
        this.props.onChoose(`My Custom ${this.props.selection.product.name}`, this.formatUrl(this.props.selection.product.name))
        // this.getProduct(this.props.selection);
    }

    render() {
        return(
            <div style={{...styles.chooseNameContainer, height: this.props.height}}>
                <label style={this.state.focused ? {...styles.chooseNameLabel, top: 0} : styles.chooseNameLabel} htmlFor="product">Give your custom creation a name</label>
                <input value={this.props.selection.customName} onBlur={this.blur.bind(this)} onFocus={this.focus.bind(this)} style={styles.chooseNameInput} type="text" name="product" id="product" autoComplete="off" onChange={this.onTextChange.bind((this))} />
            </div>
        )
    }
    
    focus() {
      this.setState({focused: true})
    }
    
    blur() {
      if (this.props.selection.customName.length === 0) {
          this.setState({focused: false})
      }
    }

    onTextChange(e) {
        this.props.onChoose(e.target.value, this.formatUrl.bind(this)(e.target.value));
    }
    
    formatUrl(newName) {
        var note = this.formatNote(newName);
        return `https://www.bestfriendbeauty.org/cart/add?id=${this.props.variantId}${note}`;
    }

    formatNote(newName) {
      let selection = this.props.selection;
      return `&properties[name]=${newName}&properties[scents]=${selection.scents.join(', ')}&properties[butters]=${selection.butters.join(', ')}&properties[oils]=${selection.oils.join(', ')}&properties[boosters]=${selection.boosters.join(', ')}`
    }
    
    // formatNote(newName) {
    //   let selection = this.props.selection;
    //   return `name: ${newName} %0Ascents: ${selection.scents.join(', ')}%0Abutters: ${selection.butters.join(', ')}%0Aoils: ${selection.oils.join(', ')}%0Aboosters: ${selection.boosters.join(', ')}`
    // }
}

const styles = {
    chooseNameContainer: {
        display: "relative",
        width: "75%",
        margin: "0 auto",
        fontWeight: 300
    },
    chooseNameLabel: {
        color: "#A1A9AD",
        pointerEvents: "none",
        position: "relative",
        top: 50,
        transition: "all .5s ease-in-out"
    },
    chooseNameInput: {
        width: "100%",
        border: "none",
        borderBottom: "1px solid #3F4345",
        margin: "10px auto",
        fontSize: 40,
        fontWeight: 300,
        textTransform: "capitalize"
    }
}
