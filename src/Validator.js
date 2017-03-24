import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super()
    this.state={
      email: '',
      password: '',
      confirmpw: ''    }
  };

    handleEmail(event){
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
      if(this.state.email.includes("@")){
        if(this.state.email && this.state.password && this.state.confirmpw){
        event.preventDefault();
          if(this.state.password === this.state.confirmpw){
            alert("Signed up successfully");
          } else {
            alert("Passwords don't match!");
          };
        } else {
          alert("You must fill in all parts of the form.");
        };
      } else {
        alert("Must be a valid email!")
      }

    }

  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" onChange={(event) => {this.handleEmail(event)}} />
        <input type="password" placeholder="password" onChange={(event) => {this.handlePassword(event)}} />
        <input type="password" placeholder="confirm password" onChange={(event) => {this.handleConfirmpw(event)}}/>
        <input type="submit" onClick={(event) => this.handleSubmit(event)}/>
      </div>
    );
  }
}

export default Validator;
