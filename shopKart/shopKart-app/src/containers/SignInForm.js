import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import '../assests/styles/containers/SignInForm.css';
import Form from '../components/Form';
import Button from '../components/Button';

class SignInform extends Component {

  constructor(props) {
    super(props);
    this.initializeData();
  }

  render() {
    const { accessToken } = this.props.signInformState.signInReducer.userProfile;
    return (
      accessToken ? <Redirect to="/home" /> :
        <form action="/" method="POST" className="sign-in-form l-position-middle">
          <Form input={this.FORM_STRUCTURE.inputs} changeHandler={this.props.onChangeHandler} />
          <Button buttonData={this.FORM_STRUCTURE.button} />
        </form>
    )
  }

  initializeData() {
    this.FORM_STRUCTURE = {};
    this.FORM_STRUCTURE.inputs = [{ label: "Email", required: true, type: "text", class: "form-control", placeholder: "", name: "email" }, { label: "Password", required: true, type: "password", class: "form-control", placeholder: "", name: "password" }];
    this.FORM_STRUCTURE.button = {
      type: "button",
      text: "Sign In",
      class: "btn btn-primary",
      clickHanlder: this.props.onSubmit
    };
  }
}

const mapStateToProps = state => ({ signInformState: state });

const mapDispatchToProps = dispatch => {
  return {
    onChangeHandler: event => {
      dispatch({
        type: "SIGN_IN_FORM_VALUE_TOUCHED",
        payload: {
          name: event.target.name,
          value: event.target.value
        }
      });
    },
    onSubmit: event => {
      dispatch({
        type: 'SIGN_IN_FORM_SUBMIT'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInform);