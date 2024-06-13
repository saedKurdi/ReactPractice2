import { Component } from "react";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <h1>SIGN UP FORM</h1>
        <form
          onChange={this.onChange}
          className="signUpForm"
          onSubmit={this.onSubmit}
        >
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <div>
            <label>Select Your Gender : </label>
            <select name="sex">
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div>
            <label>I Agree "Terms and Conditions"</label>
            <input type="checkbox" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default SignUpForm;
