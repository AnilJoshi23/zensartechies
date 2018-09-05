
import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

class MyLargeModal extends React.Component {
constructor(props, context) {
super(props, context);
   this.state = {
  isOpen: false
    };
   
  }

openModal() {
  this.setState({
    isOpen: true
  });
};
 
hideModal() {
  this.setState({
    isOpen: false
  });
};

// backdropStyles = {
//   base: {
//     background: 'rgba(0, 0, 0, .7)',
//     opacity: 0,
//     visibility: 'hidden',
//     transition: 'all 0.4s',
//     overflowX: 'hidden',
//     overflowY: 'auto'
//   },
//   open: {
//     opacity: 1,
//     visibility: 'visible'
//   }
// };
 
// dialogStyles = {
//   base: {
//     top: -600,
//     transition: 'top 0.4s'
//   },
//   open: {
//     top: 0
//   }
// }

  render() {
    return (

     <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
        <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
         
     </ModalBody>
        <ModalFooter>
            <button className='btn btn-default' onClick={this.hideModal}>
            Close
            </button>
            <button className='btn btn-primary'>
            Save changes
            </button>
        </ModalFooter>
    </Modal>
     
    );
  }
}

export default MyLargeModal;