import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import "./sing-in.scss";
import CustomButton from "../../components/custom-button/CustomButton";
import { singInWithGoogle } from "../../firebase/firebase";

class SingIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sing In</CustomButton>
            <CustomButton
              type="submit"
              onClick={singInWithGoogle}
              isGoogleSignIn
            >
              Sing In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SingIn;
