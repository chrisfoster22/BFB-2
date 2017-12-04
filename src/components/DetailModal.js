import React, { Component } from 'react';

export default class DetailModal extends Component {

    render() {
        return(
            <div className="modal-container" style={this.props.open ? {opacity: 1} : {opacity: 0, pointerEvents: "none"}}>
                <div className="modal">
                    <h2 className="modal-heading">{this.props.modalHeading}</h2>
                    <div className="modal-message">{this.props.modalMessage}</div> 
                    <div className="modal-btn-container">
                      <button onClick={this.btnClick.bind(this)} className="modal-btn">{this.props.modalBtnText}</button>
                    </div>
                </div>
            </div>
        )
    }
    
    btnClick() {
        this.props.click(null)
    }
    
}