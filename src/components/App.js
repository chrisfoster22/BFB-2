import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import SidePanel from './SidePanel';
import Button from './Button';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            panelHeight: 800,
            cartUrl: null,
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
                    message: "First",
                    type: "recipient"
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
                    type: "customName",
                    selection: "name"
                },
                {
                    message: "Ready to checkout!",
                    type: null
                },

            ]
        }
    }

    componentWillMount() {
        let headerHeight = window.innerWidth * .55 / 2.4
        let selectorHeight = 500 - headerHeight;
        this.setState({headerHeight, selectorHeight})
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        let currentStep = this.state.steps[this.state.currentStep];
        let disabled = this.state.currentStep === 8 ? this.state.selection.customName.length === 0 :  currentStep.selection.length < 1
        return (
            <div className="App">
                <main style={styles.selectorContainer} className="selection-panel">
                    <div>
                        <header className="App-header" style={{height: this.state.headerHeight}}>
                            <div className="App-header-image"
                            style={{
                                 backgroundSize: "100% 100%",
                                 backgroundImage: `url(${currentStep.backgroundImg})`,
                                 height: this.state.headerHeight}}
                            ref={(header) => this.header = header}>
                            <div style={styles.headerText}>
                                <div>{`Step ${this.state.currentStep} of 7`}</div>
                                <h1 style={styles.headerMsg}>{currentStep.headerMsg}</h1>
                            </div>
                            </div>
                        </header>

                        {this.getSelectionPanel.bind(this, currentStep)()}
                    </div>
                    <div style={styles.buttonContainer}>
                        <Button link={true} hidden={currentStep.type === "recipient"} click={this.prevStep.bind(this)} text="< Back"/>
                        <Button
                            cartUrl={this.state.cartUrl}
                            disabled={disabled}
                            click={this.nextStep.bind(this)}
                            text={this.state.currentStep === 8 ? "Add to Cart" : "Next"}/>
                    </div>
                </main>
              <aside style={styles.sidePanelContainer} className="side-panel">
                    <SidePanel selection={this.state.selection} current={this.state.currentStep}/>
                </aside>
            </div>
        );
    }

    nextStep() {
        this.setState({currentStep: (this.state.currentStep + 1)})
    }

    prevStep() {
        if (this.state.currentStep === 4) {
            this.setState({currentStep: 3, selection: {...this.state.selection, "scents": [], "oils": [], "butters": [], "boosters": [], "customName": "" }})
        } else {
            this.setState({currentStep: (this.state.currentStep - 1)})
        }
    }

    customizeName(name, cartUrl) {
        this.setState({selection: {...this.state.selection, customName: name}, cartUrl: cartUrl})
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
                return Products.products[this.state.selection.recipient][this.state.selection.focusArea].filter((x) => {return x.options !== false});
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
                    <ChooseName selection={this.state.selection} onChoose={this.customizeName.bind(this)} />
                )
            case 9:
                return(
                    <Checkout selection={this.state.selection} />
                )
            default:
                return( <Selector
                    step={currentStep}
                    height={this.state.selectorHeight}
                    options={this.getOptions()}
                    chooseProduct={this.chooseProduct.bind(this)}
                    unChooseProduct={this.unChooseProduct.bind(this)}
                    selection={this.state.selection[currentStep.type]} />
                )
        }
    }

    updateDimensions() {
        let headerWidth = ReactDOM.findDOMNode(this.header).getBoundingClientRect().width;
        let headerHeight = headerWidth / 2.4;
        let selectorHeight = 500 - headerHeight;
        this.setState({headerHeight, selectorHeight})
    }
}

const styles = {
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        margin: "0 auto",
        boxSizing: "border-box"
    },
    selectorContainer: {
        position: "relative",
        paddingBottom: 100,
        boxShadow: "3px 0 20px 0 rgba(0,0,0,0.11)"
    },
    sidePanelContainer: {
        width: "45%"
    },
    headerText: {
        position: "absolute",
        bottom: 0,
        color: "#ffffff",
        fontWeight: 300,
        zIndex: 1
    },
    headerMsg: {
        margin: "5px 0px 15px",
        fontSize: 55,
        fontWeight: 300
    }
}

export default App;
