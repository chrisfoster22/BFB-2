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
        this.state = this.props.selection;
        this.getProduct = this.getProduct.bind(this)
    }

    componentWillMount() {
        this.getProduct(this.props.selection);
    }

    render() {
        return(
            <div>{this.state.product.name}</div>
        )
    }

    getProduct(selection) {
        shopClient.fetchProduct(selection.product.productId)
        .then((product) => {
            var variant = product.variants[0];
            var quantity = 1;
            var checkoutURL;
            var note = this.formatNote(selection);

            // checkoutURL = variant.checkoutUrl(quantity);
            // window.open(("https://www.bestfriendbeauty.org/cart/add?id=" + variant.id));
            window.open(("https://www.bestfriendbeauty.org/cart/add?id=" + variant.id + "&note=" + note));
        })
        .catch(function (e) {
            console.log(e);
        });
    }

    formatNote(selection) {
      return `scents: ${selection.scents.join(', ')}%0Abutters: ${selection.butters.join(', ')}%0Aoils: ${selection.oils.join(', ')}%0Aboosters: ${selection.boosters.join(', ')}`
    }

}
