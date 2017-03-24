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

    handleEmail(event){
      console.log("hello")
      this.setState({
        email: event.target.value
      });
    };

    handlePassword(event){
      this.setState({
        password: event.target.value
      });
    };

    handleConfirmpw(event){
      this.setState({
        confirmpw: event.target.value
      });
    };

    handleSubmit(event){
      this.setState({

      })
    }

  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit= {this.handleSubmit}>
        <input type="text" placeholder="email" onChange={this.handleEmail} />
        <input type="password" placeholder="password"  />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Validator;
