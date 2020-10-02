import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from 'yup';

const CustomInput = ({ field, form: { touched, erros }, ...props }) => {
  // objet field contient les propiétés de Field qu'on va donner à notre input :
  // - onBlur / onChange / value / name via {...field}
  // dans l'objet form de Formik on récupère les propriétés qui nous intéresse
  // {...props} le reste des propiétés qu'on passe via Field
  return (
    <div className="form-group">
      <label> {props.label} </label>
      <input
        {...field}
        type="text"
        {...props}
        className="form-control"
      />
    </div>
  );
};

class HigherNumber extends Component {
  state = {
    number: null,
    values: { num1: 0, num2: 0 },
  };

  higherNumber = (a, b) => {
    return (a === b) ? null : ( a > b) ? a : b;

    // this.setState({
    //   number,
    // });
  };

  higherNumberSchema = Yup.object().shape({
    num1: Yup.number().required().min(1).max(3),
    num2: Yup.number().required().min(1).max(3),
  });

  handleSubmitForm = (values, actions) => {
    console.log("VALUES ", values);
    console.log("FORM ", actions);
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div>
            <h5>Resultat : </h5>
          </div>
        </div>
        <div className="col-6" style={{maxWidth: "300px"}}>
          <div>
            <h5>Exercice : </h5>
            <Formik
              onSubmit={this.handleSubmitForm}
              initialValues={{num1: "", num2: ""}}
              validateOnBlur={false}
              validateOnChange={false}
              validationSchema={this.higherNumberSchema}
            >
              { ({handleSubmit, isSubmitting}) => <form onSubmit={handleSubmit} >
                <Field
                  name="num1"
                  type="text"
                  label="Num 1"
                  component={CustomInput}
                />
                <Field
                  name="num2"
                  type="text"
                  label="Num 2"
                  component={CustomInput}
                />
                <button className="btn btn-success" >Check</button>
              </form> }
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default HigherNumber;
