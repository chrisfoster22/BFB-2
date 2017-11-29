import React, { Component } from 'react';
import logo from '.././assets/logo.svg';
import recipientImg from '.././assets/images/recipient.png';
import focusAreaImg from '.././assets/images/focusArea.png';
import productImg from '.././assets/images/product.png';
import scentsImg from '.././assets/images/scents.png';
import oilsImg from '.././assets/images/oils.png';
import buttersImg from '.././assets/images/butters.png';
import boostersImg from '.././assets/images/booster.png';
import './App.css';
import Selector from './Selector';
import Products from '.././data/products';
import ChooseName from './ChooseName';
import Checkout from './Checkout';
import Steps from './Steps';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            selection: {
                recipient: "",
                focusArea: "",
                product: "",
                "scents": [],
                "oils": [],
                "butters": [],
                "boosters": [],
                "customName": ""
            },
            steps: [
                {
                    message: "First"
                },
                {
                    message: "Select one:",
                    headerMsg: "Choose a Recipient",
                    type: "recipient",
                    selection: "",
                    backgroundImg: recipientImg
                },
                {
                    message: "Select one:",
                    headerMsg: "Choose a Focus Area",
                    type: "focusArea",
                    selection: "",
                    backgroundImg: focusAreaImg
                },
                {
                    message: "Select one:",
                    headerMsg: "Choose a Product Type",
                    type: "product",
                    selection: "",
                    backgroundImg: productImg
                },
                {
                    message: "Select up to three:",
                    headerMsg: "Choose Your Scents",
                    type: "scents",
                    selection: [],
                    limit: 3,
                    backgroundImg: scentsImg
                },
                {
                    message: "Select up to two:",
                    headerMsg: "Choose Your Oils",
                    type: "oils",
                    selection: [],
                    limit: 2,
                    backgroundImg: oilsImg
                },
                {
                    message: "Select up to three",
                    headerMsg: "Choose Your Butters",
                    type: "butters",
                    selection: [],
                    limit: 3,
                    backgroundImg: buttersImg
                },
                {
                    message: "Select up to three",
                    headerMsg: "Choose Your Boosters",
                    type: "boosters",
                    selection: [],
                    limit: 3,
                    backgroundImg: boostersImg
                },
                {
                    message: null,
                    headerMsg: "",
                    type: "customName"
                },
                {
                    message: "Ready to checkout!",
                    type: null
                },

            ]
        }
    }

    render() {

        let currentStep = this.state.steps[this.state.currentStep];
        return (
            <div className="App">
                <div style={styles.container}>
                    <div style={styles.selectorContainer}>
                        <header 
                            className="App-header" 
                            style={{backgroundSize: "100% 100%", backgroundImage: `url(${currentStep.backgroundImg})`, height: 371}}>
                            <div>{`Step ${this.state.currentStep} of 7`}</div>
                            <h1>{currentStep.headerMsg}</h1>
                        </header>
                        {this.getSelectionPanel.bind(this, currentStep)()}
                    </div>
                    <div style={styles.buttonContainer}>
                        {currentStep.type && <button style={{...styles.link, ...styles.buttonSecondary}} onClick={this.prevStep.bind(this)}>{'<  Back'}</button> }
                        <button style={{...styles.button, ...styles.buttonPrimary}} onClick={this.nextStep.bind(this)}>Next</button>
                    </div>
                </div>
                <div>
                    <Steps current={this.state.currentStep}/>
                </div>
            </div>
        );
    }

    nextStep() {
        this.setState({currentStep: (this.state.currentStep + 1)})
    }

    prevStep() {
        this.setState({currentStep: (this.state.currentStep - 1)})
    }

    customizeName(name) {
        this.setState({selection: {...this.state.selection, customName: name}})
    }

    chooseProduct(step, option, isArray) {
        let newSelection = {...this.state.selection};
        if (isArray) {
            if (["none", "unscented"].indexOf(option) > -1) {
                newSelection[step] = [option];
            } else {
                var noneIndex = newSelection[step].indexOf("none");
                var unscentedIndex = newSelection[step].indexOf("unscented");
                if (noneIndex > -1) {
                    newSelection[step].splice(noneIndex, 1);
                } else if (unscentedIndex > -1) {
                    newSelection[step].splice(unscentedIndex, 1);
                }
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
    
    getSelectionPanel(currentStep) {
        switch(this.state.currentStep) {
            case 8:
                return(
                    <ChooseName onChoose={this.customizeName.bind(this)} />
                )
            case 9:
                return(
                    <Checkout selection={this.state.selection} />
                )
            default:
                return( <Selector
                    step={currentStep}
                    options={this.getOptions()}
                    chooseProduct={this.chooseProduct.bind(this)}
                    unChooseProduct={this.unChooseProduct.bind(this)}
                    selection={this.state.selection[currentStep.type]} />
                )
        }
    }
}

const styles = {
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        width: "200px",
        height: "50px",
        border: "1px solid #24C6DC",
        borderRadius: "100px",
        boxShadow: "0 6px 10px 0 rgba(0,0,0,0.18)",
        cursor: "pointer"
    },
    buttonPrimary: {
        color: "#FFFFFF",
        background: "#24C6DC",
    },
    buttonSecondary: {
        color: "#24C6DC",
        background: "#FFFFFF",
    },
    link: {
        border: "none",
        cursor: "pointer"
  },
    container: {
        padding: "30px 10%"
  },
    selectorContainer: {
        width: "55%"
    }
}

export default App;
