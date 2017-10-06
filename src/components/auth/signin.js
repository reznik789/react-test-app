import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

const renderField = field => (
  <input {...field.input} className="form-control" type="text" />
);

class Signin extends Component {
  _handleFormSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  render = () => {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this._handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field component={renderField} type="text" name="email" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field component={renderField} type="text" name="password" />
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  };
}

export default reduxForm({
  form: "Signin"
})(Signin);
