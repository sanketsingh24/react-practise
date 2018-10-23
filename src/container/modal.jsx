import React from 'react';
import Form from './form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from 'reactstrap';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>OPEN</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="shadow-pan" >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Col md="12">
              <Form toggle ={this.toggle}/>
            </Col>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Dialog;