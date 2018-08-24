import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Model.css';

class ModalPopup extends Component {
    render() {
        return (
            <Modal {...this.props} className="customPopupWrap" >
                <Modal.Header className="modal-header-styles">
                    <Modal.Title id="contained-modal-title-sm">Use <strong>name@company.com</strong> for Overstock Professional</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-styles">
                    <h4><b>A business user account is not a personal account</b></h4>
                    <p>You are converting your personal account into a business account. If you add others and allow them to manage your account, they can view your account information 
                  (including order history, addresses, payment methods, personal information)</p>
                </Modal.Body>
                <Modal.Footer className='modal-footer-styles'>
                    <Button className="modal-button-styles" onClick={this.props.onHide}>Cancel</Button>
                    <Button className="modal-button-styles" onClick={() => history.push('/home') } >Confirm & Proceed</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalPopup;