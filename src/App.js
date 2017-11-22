import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Selector from './Selector';
import Products from './products';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            selection: {
                recipient: "",
                focusArea: "",
                product: "",
                "scents": [],
                "oils": [],
                "butters": [],
                "boosters": []
            },
            steps: [
                {
                    message: "Who is this for?",
                    type: "recipient",
                    selection: ""
                },
                {
                    message: "What kind of product?",
                    type: "focusArea",
                    selection: ""
                },
                {
                    message: "Which product?",
                    type: "product",
                    selection: ""
                },
                {
                    message: "What would you like it to smell like?",
                    type: "scents",
                    selection: [],
                    limit: 3
                },
                {
                    message: "What would you like the base to be?",
                    type: "oils",
                    selection: [],
                    limit: 2
                },
                {
                    message: "Would you like to add any butters?",
                    type: "butters",
                    selection: [],
                    limit: 3
                },
                {
                    message: "How about some health boosters?",
                    type: "boosters",
                    selection: [],
                    limit: 3
                }

            ]
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                </header>
                <Selector step={this.state.steps[this.state.currentStep]} options={this.getOptions.bind(this)} />
            </div>
        );
    }

    nextStep() {
        this.setState({currentStep: (this.state.currentStep + 1)})
    }

    getOptions() {
        console.log("HI FROM OPTIONS");
        switch(this.state.currentStep) {
            case 1:
                return ["person", "dog"];
            case 2:
                return ["bath", "outdoor", "face/mouth", "body"];
            case 3:
                return Products[this.state.selection.recipient][this.state.selection.focusArea];
            default:
                return [];
        }
    }

}

export default App;
