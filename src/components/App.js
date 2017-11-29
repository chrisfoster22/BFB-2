import React, { Component } from 'react';
import logo from '.././assets/logo.svg';
import './App.css';
import Selector from './Selector';
import Products from '.././data/products';
import Checkout from './Checkout';

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
                    message: "Get started!"
                },
                {
                    message: "Who is this for?",
                    type: "recipient",
                    selection: "",
                    backgroundImg: "https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg"
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

        if (this.state.currentStep === 8) {
            return(
                <div>
                    <Checkout selection={this.state.selection} />
                </div>
            )
        }

        let currentStep = this.state.steps[this.state.currentStep];

        return (
            <div className="App">
                <header className="App-header">
                </header>
                <Selector
                step={currentStep}
                options={this.getOptions()}
                nextStep={this.nextStep.bind(this)}
                chooseProduct={this.chooseProduct.bind(this)}
                unChooseProduct={this.unChooseProduct.bind(this)}
                prevStep={this.prevStep.bind(this)}
                selection={this.state.selection[currentStep.type]} />
            </div>
        );
    }

    nextStep() {
        this.setState({currentStep: (this.state.currentStep + 1)})
    }

    prevStep() {
        this.setState({currentStep: (this.state.currentStep - 1)})
    }

    chooseProduct(step, option, isArray) {
        let newSelection = {...this.state.selection};
        if (isArray) {
            if (["none", "unscented"].indexOf(option) > -1) {
                newSelection[step] = [option];
            } else {
                newSelection[step].push(option);
            }
        } else {
            newSelection[step] = option;
        }

        let newSteps = {...this.state.steps}
        newSteps[this.state.currentStep].selection = newSelection[step];
        this.setState({selection: newSelection, steps: newSteps });
    }

    unChooseProduct(step, option) {
        let newSelection = {...this.state.selection};
        let optionIndex = newSelection[step].indexOf(option);
        newSelection[step].splice(optionIndex, 1);
        let newSteps = {...this.state.steps}
        newSteps[this.state.currentStep].selection = newSelection[step];
        this.setState({selection: newSelection, steps: newSteps });
    }

    getOptions() {
        switch(this.state.currentStep) {
            case 1:
                return ["person", "dog"];
            case 2:
                return ["bath", "outdoor", "face/mouth", "body"];
            case 3:
                return Products.products[this.state.selection.recipient][this.state.selection.focusArea];
            case 4:
                return Products.options[this.state.selection.recipient]["scents"];
            case 5:
                return Products.options[this.state.selection.recipient]["oils"];
            case 6:
                return Products.options[this.state.selection.recipient]["butters"]
            case 7:
                return Products.options[this.state.selection.recipient]["boosters"]
            default:
                return [];
        }
    }

}

export default App;
