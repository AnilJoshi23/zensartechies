import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class buttonBar extends Component {
  constructor(props, context) {
    super(props, context);
   
  }
  render() {
   return (
     <div className="container">

  
  <button type="button" className="btn btn-info btn-lg" data-toggle="popover" data-target="#myModal">Open Modal</button>

  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
    
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">


          <p>Some text in the modal.</p>
        </div>
        <div className="modal-footer">
          
        </div>
      </div>
      
    </div>
  </div>
  
</div>

    );
  }
}

export default buttonBar;