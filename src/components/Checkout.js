import React, { Component } from 'react';
import ShopifyBuy from 'shopify-buy';

var shopClient = ShopifyBuy.buildClient({
  accessToken: '63e6175cca54c2980bc0cfd7e731a6e7',
  domain: 'www.bestfriendbeauty.org',
  appId: '6'
});

export default class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {cartUrl: ""}
        this.getProduct = this.getProduct.bind(this)
    }

    componentWillMount() {
        console.log(this.props.selection);
        this.getProduct(this.props.selection);
    }

    render() {
        return(
          <div>
            <div>You're all done! Here's the product you've created:</div>
            <div>{this.props.selection.product.name}</div>
            <button><a href={this.state.cartUrl}>Click here to add to Cart</a></button>
          </div>
        )
    }

    getProduct(selection) {
        shopClient.fetchProduct(selection.product.productId)
        .then((product) => {
            var variant = product.variants[0];
            var note = this.formatNote(selection);
            var cartUrl = `https://www.bestfriendbeauty.org/cart/add?id=${variant.id}&note=${note}`;
            this.setState({cartUrl})
        })
        .catch(function (e) {
            console.log(e);
        })
    }

    formatNote(selection) {
      return `scents: ${selection.scents.join(', ')}%0Abutters: ${selection.butters.join(', ')}%0Aoils: ${selection.oils.join(', ')}%0Aboosters: ${selection.boosters.join(', ')}`
    }

}
