import React, { Component } from 'react';

class Searchbox extends Component {
  render() {
    return (
      <div style={{ width: "55%" }}>
        <div style={{ marginTop: "5px", marginBottom: "5px"}} className="input-groupN md-form form-sm form-1 pl-0">
            <div style={{  position: "absolute",padding: "8px", marginLeft: "169px" }} className="input-group-prependN">
                <span className="input-group-textN purple lighten-3" id="basic-text1"><i className="fa fa-search text-white" aria-hidden="true"></i></span>
            </div>
            <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
        </div>
    </div>
    )
  }
}

export default Searchbox;