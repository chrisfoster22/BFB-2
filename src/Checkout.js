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
    }
    
    componentWillMount() {
        console.log(this.props);
        this.getProduct(this.props.selection);
    }
    
    render() {
        return(
            <div>{this.state.product.name}</div>
        )
    }
    
    getProduct(selection) {
        shopClient.fetchProduct(selection.product.productId)
        .then(function (product) {
            console.log(product.variants);
            var variant = product.variants[0];
            var quantity = 1;
            var checkoutURL;
            console.log(variant.id);
            checkoutURL = variant.checkoutUrl(quantity);
            window.open(("https://www.bestfriendbeauty.org/cart/add?id=" + variant.id));
        })
        .catch(function () {
        console.log('Request failed');
        });
    }
    
}












