import { Component } from "react";

class SingInForm extends Component {
  state = {
    username: "",
    password: "",
  };

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <h1>SIGN IN FORM</h1>
        <form className="signInForm" onSubmit={this.onSubmit}>
          <input
            name="username"
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.onChangeInput}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.onChangeInput}
          />
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default SingInForm;
