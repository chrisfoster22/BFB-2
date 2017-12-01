import React, { Component } from 'react';
import ShopifyBuy from 'shopify-buy';

var shopClient = ShopifyBuy.buildClient({
  accessToken: '63e6175cca54c2980bc0cfd7e731a6e7',
  domain: 'www.bestfriendbeauty.org',
  appId: '6'
});

export default class ChooseName extends Component {
    
    constructor(props) {
        super(props);
        this.state = {cartUrl: ""}
        this.getProduct = this.getProduct.bind(this)
    }
    
    componentWillMount() {
        
        this.getProduct(this.props.selection);
    }

    render() {
        return(
            <div style={{...styles.chooseNameContainer, height: this.props.height}}>
                <label style={this.state.focused ? {...styles.chooseNameLabel, top: 0} : styles.chooseNameLabel} htmlFor="product">Name Your Product</label>
                <input onBlur={this.blur.bind(this)} onFocus={this.focus.bind(this)} style={styles.chooseNameInput} type="text" name="product" id="product" autoComplete="off" onChange={this.onTextChange.bind((this))} />
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
    
    getProduct(selection) {
        shopClient.fetchProduct(selection.product.productId)
        .then((product) => {
            var variant = product.variants[0];
            this.setState({variantId: variant.id})
        })
        .catch(function (e) {
            console.log(e);
        })
    }
    
    formatUrl(newName) {
        var note = this.formatNote(newName);
        return `https://www.bestfriendbeauty.org/cart/add?id=${this.state.variantId}&note=${note}`;
    }

    formatNote(newName) {
      let selection = this.props.selection;
      return `name: ${newName} %0Ascents: ${selection.scents.join(', ')}%0Abutters: ${selection.butters.join(', ')}%0Aoils: ${selection.oils.join(', ')}%0Aboosters: ${selection.boosters.join(', ')}`
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
        fontWeight: 300
    }
}
