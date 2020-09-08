import React, { Component } from "react";

class HigherNumber extends Component {
  state = {};

  handleOnSubmit = (e) => {
    e.prventDefault();
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <form className="loginForm" onSubmit={this.handleOnSubmit}>
            <div className="form-group">
              <label> Number 1 </label>
              <input
                style={{ maxWidth: "250px" }}
                type="text"
                className="form-control"
              />
              <label> Number 2 </label>
              <input
                style={{ maxWidth: "250px" }}
                type="text"
                className="form-control"
              />
              <button
                style={{ minWidth: "100px" }}
                className="btn btn-success mt-2"
              >
                Higher
              </button>
            </div>
          </form>
        </div>
        <div className="col-6">
          <h1>Resultat : </h1>
        </div>
      </div>
    );
  }
}

export default HigherNumber;
