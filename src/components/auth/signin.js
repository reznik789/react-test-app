import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const renderField = field => (
  <input {...field.input} className="form-control" type="text" />
);

class Signin extends Component {
  _handleFormSubmit = ({ email, password }) => {
    const {signInUser, history} = this.props;
    signInUser({ email, password }, history);
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

Signin = reduxForm({
  form: "Signin"
})(Signin);

export default withRouter(connect(null, actions)(Signin));
