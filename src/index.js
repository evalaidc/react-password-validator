import React from 'react';
import ReactDOM from 'react-dom';
import Form from './App';
import './index.css';
import './App.css'

const form ={
  email: "evaster@yahoo.com",
  password: "asdfjkl",
  confirmpw: "asdfjkl;"
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
