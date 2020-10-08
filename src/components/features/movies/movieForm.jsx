import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

class MovieForm extends Component {
  movieSchema = Yup.object().shape({
    title: Yup.string().required().min(5).max(255),
    genreId: Yup.string().required().label("Genre"),
    numberInStock: Yup.number().min(0).max(255),
    dailyRentalRate: Yup.number().required().min(0).max(255),
  });

  submitForm = (values, actions) => {
    console.log(values);
    console.log(actions);
  };

  handleOnSave = () => {
    const { history } = this.props;
    console.log("aaa", history);
    history.push("/movies");
  };

  render() {
    const { match } = this.props;
    return (
      <Formik
        onSubmit={this.submitForm}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={this.userSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          touched,
        }) => <form className="loginForm mt-5" onSubmit={handleSubmit}>
            </form>}
      </Formik>
    );
  }
}

export default MovieForm;
