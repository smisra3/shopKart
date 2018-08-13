import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import '../assests/styles/containers/SignUpForm.css';
import Form from '../components/Form';
import Button from '../components/Button';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.initializeData();
  }

  render() {
    const { userCreatedSuccessfully } = this.props.signUpFormState.signUpReducer;
    return (
      userCreatedSuccessfully.length ? <Redirect to="/login" /> :
        <form action="/" method="POST" className="sign-up-form l-position-middle">
          <Form input={this.FORM_STRUCTURE.inputs} changeHandler={this.props.onChangeHandler} />
          <Button buttonData={this.FORM_STRUCTURE.button} />
        </form>
    )
  }

  initializeData() {
    this.FORM_STRUCTURE = {};
    this.FORM_STRUCTURE.inputs = [{ label: "First Name", type: "text", class: "form-control", name: "fName" }, { label: "Last Name", type: "text", class: "form-control", name: "lName" }, { label: "Email", type: "text", class: "form-control", name: "email" }, { label: "Password", type: "password", class: "form-control", name: "password" }, { label: "Username", type: "text", class: "form-control", name: "username" }];
    this.FORM_STRUCTURE.button = {
      type: "button",
      text: "Sign In",
      class: "btn btn-primary",
      clickHanlder: this.props.onSubmit
    };
  }
}

const mapStateToProps = state => ({ signUpFormState: state });

const mapDispatchToProps = dispatch => {
  return {
    onChangeHandler: event => {
      dispatch({
        type: "SIGN_UP_FORM_VALUE_TOUCHED",
        payload: {
          name: event.target.name,
          value: event.target.value
        }
      });
    },
    onSubmit: event => {
      dispatch({
        type: 'SIGN_UP_FORM_SUBMIT'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);