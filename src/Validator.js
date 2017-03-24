import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super()
    this.state={
      email: '',
      password: '',
      confirmpw: '',
      valid: true
    };
  };


  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form>
        <input type="text" placeholder="email" value={this.state.email} />
        <input type="password" placeholder="password" value={this.state.password}/>
        <input type="password" placeholder="confirm password" value={this.state.confirmpw} />
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Validator;
