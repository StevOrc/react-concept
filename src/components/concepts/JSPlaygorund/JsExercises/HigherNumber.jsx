import React, { Component } from "react";

class HigherNumber extends Component {
  state = {
    number: null,
    values: { num1: 0, num2: 0 },
  };

  higherNumber = (a, b) => {
    let number;
    if (a === b) number = a;
    else {
      number = a > b ? a : b;
    }

    this.setState({
      number,
    });
  };

  handleOnSubmit = (e) => {
    e.prventDefault();
    this.higherNumber();
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
                value={this.state.values.num1}
              />
              <label> Number 2 </label>
              <input
                style={{ maxWidth: "250px" }}
                type="text"
                className="form-control"
                value={this.state.values.num1}
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
          <h5>Resultat : </h5>
        </div>
      </div>
    );
  }
}

export default HigherNumber;
