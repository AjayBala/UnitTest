import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import success from '../../../assets/Images/success_modal.png';
import './successPopup.css';
import close from '../../../assets/Images/close_icon.png';

var style = {
    textAlign: "center",
    backgroundColor:"#f9fafb",
    border: "none"
}

class ModalPopup extends Component {
    
    render() {
        const { successignup, bodycontent, isModalAppear} = this.props
        return (
            <Modal {...this.props}>
                {this.props.bodycontent && <Modal.Body className="popUpBodyStyles">
                    
                {this.props.successignup && <div className="successTextStyles successBox">
                        <img className="successImgStyle" src={success}  alt="success"/>
                        <div className="temp">{this.props.bodycontent}</div>
                    </div>}

                </Modal.Body>}
                {this.props.footerContent && <Modal.Footer>

                    <Button onClick={this.props.onHide}>Cancel</Button>
                    <Button>Confirm & Proceed</Button>
                </Modal.Footer> }
            </Modal>
        )
    }
}

export default ModalPopup;