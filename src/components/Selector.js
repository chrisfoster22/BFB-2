import React, { Component } from 'react';
import Option from './Option';

export default class Selector extends Component {


    render() {
        let options = this.props.options.map((option, i) => {
            return(
                <Option 
                    chooseProduct={this.props.chooseProduct.bind(this)}
                    key={i}
                    option={option}
                    step={this.props.step} />
            )
        });
        return(
            <div>{options}</div>
        )
    }

    // renderProducts() {
    //     let options = this.props.options.map((option, i) => {
    //         return(<div
    //             style={styles.options}
    //             onClick={onChoose.bind(this)}
    //             key={i}>
    //             {option.name}
    //             {option.options === false && <span style={{paddingLeft:"5px", fontStyle:"italic"}}>(Cannot be further customized)</span>}
    //             </div>
    //         )
    //         function onChoose() {
    //             this.props.chooseProduct(this.props.step.type, option, false);
    //         }
    //     })
    //     return(
    //         <div>{options}</div>
    //     )
    // }
}