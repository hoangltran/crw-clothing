import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles.jsx";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions.js";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;
  const dispatch = useDispatch();
  const emailSignInStartHandler = (email, password) => {
    dispatch(emailSignInStart({ email, password }));
  };

  const googleSignInStartHandler = () => dispatch(googleSignInStart());

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStartHandler(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your username and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
          label="Password"
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStartHandler}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
