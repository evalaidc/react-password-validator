import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
// allows us to access and make parameters
  constructor(props){
    super()
    this.state={
      email: '',
      password: '',
      confirmpw: ''    }
  };

// receives input values for email
    handleEmail(event){
      // sets the email state to the constructor above
      this.setState({
        email: event.target.value
      });
    };
// receives input values from the form for password
    handlePassword(event){
      // sets the password state to the constructor above
      this.setState({
        password: event.target.value
      });
    };
// receives input values from the form for confirmpw
    handleConfirmpw(event){
      // sets the confirmpw state to the constructor above
      this.setState({
        confirmpw: event.target.value
      });
    };

// what happens when submit is clicked
    handleSubmit(event){
      // restricts email to include an @ symbol
      if(this.state.email.includes("@")){
        // prevents user from submitting form without filling in all fields
        if(this.state.email && this.state.password && this.state.confirmpw){
        event.preventDefault();
        // prevents password and confirmation password from being different.
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
