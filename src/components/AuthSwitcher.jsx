import { Component } from "react";
import SignUpForm from "./SignUpForm";
import SingInForm from "./SignInForm";
class AuthSwitcher extends Component {
  state = {
    isRegister: false,
  };

  setLogin = (e) => {
    e.preventDefault();
    this.setState({ isRegister: !this.state.isRegister });
  };

  render() {
    return (
      <>
        <button onClick={this.setLogin}>
          {this.state.isRegister ? "Go To Login Page" : "Go To Register Page"}
        </button>
        {this.state.isRegister ? <SignUpForm /> : <SingInForm />}
      </>
    );
  }
}

export default AuthSwitcher;
