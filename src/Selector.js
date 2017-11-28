import React, { Component } from 'react';

export default class Selector extends Component {


    render() {
        
        if (this.props.step.type === "product") {
            console.log(this.props.options);
            return this.renderProducts();
        }
        
        let options = this.props.options.map((option, i) => {
            let color = "white";
            if (typeof this.props.selection === "object" && this.props.selection.indexOf(option) > -1) {
                color = "green";
            } 
            return <div style={{backgroundColor: color}} onClick={onChoose.bind(this)} key={i}>{option}</div>
            function onChoose() {
                if (!this.props.step.limit) {
                    this.props.chooseProduct(this.props.step.type, option, false);
                } else if (this.props.step.selection.indexOf(option) > -1) {
                    this.props.unChooseProduct(this.props.step.type, option);
                } else if (this.props.step.selection.length < this.props.step.limit) {
                    this.props.chooseProduct(this.props.step.type, option, true);    
                }
            }
        })
        return(
            <div>
                <h2>{this.props.step.message}</h2>
                <div>{options}</div>
                <div onClick={this.props.nextStep}>Next</div>
                {this.props.step.type && <div onClick={this.props.prevStep}>Back</div> }
            </div>
        )
    }
    
    renderProducts() { 
        let options = this.props.options.map((option, i) => {
            return <div onClick={onChoose.bind(this)} key={i}>{option.name}</div>
            function onChoose() {
                this.props.chooseProduct(this.props.step.type, option, false);
            }
        })
        return(
            <div>
                <h2>{this.props.step.message}</h2>
                <div>{options}</div>
                <div onClick={this.props.nextStep}>Next</div>
                {this.props.step.type && <div onClick={this.props.prevStep}>Back</div> }
            </div>
        )
    }
}
