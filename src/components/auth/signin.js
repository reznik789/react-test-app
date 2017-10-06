import React, { Component } from "react";
import { reduxForm } from "redux-form";

class Signin extends Component {
  
  _handleFormSubmit = values => {
    console.log(values);
  };

  render = () => {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
      <form onSubmit={handleSubmit(this._handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>
            <input {...email} type="text" className="form-control" />
          </label>
        </fieldset>
        <fieldset className="form-group">
          <label>
            <input {...password} type="text" className="form-control" />
          </label>
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    );
  };
}

export default reduxForm({
  form: "Signin",
  fields: ["email", "password"]
})(Signin);
