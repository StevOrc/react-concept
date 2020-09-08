import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import HigherNumber from "./JsExercises/HigherNumber";
import FizzBuzz from "./JsExercises/FizzBuzz";

class JsPlaygorund extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row p-1">
          <div
            className="jumbotron col-12"
            style={{
              background: "#323330",
              color: "#F0DB4F",
              borderRadius: "none",
            }}
          >
            <h1 className="display-4">Welcome To JS playground</h1>
            <p className="lead">
              Here is a Javascript playgorund for learning basics of JS.
            </p>
            <p>(Open the console to show the result of each button action)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div class="list-group">
              <NavLink
                className="list-group-item list-group-item-action list-group-item-light"
                style={{ cursor: "pointer" }}
                to="/js-playground/higher-number"
              >
                Return the higher number
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action list-group-item-light"
                style={{ cursor: "pointer" }}
                to="/js-playground/fizzbuzz"
              >
                FizzBuzz
              </NavLink>
            </div>
          </div>
          <div className="col">
            <Switch>
              <Route
                path="/js-playground/higher-number"
                component={HigherNumber}
              ></Route>
              <Route
                path="/js-playground/fizzbuzz"
                component={FizzBuzz}
              ></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default JsPlaygorund;
