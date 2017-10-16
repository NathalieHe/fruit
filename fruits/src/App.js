
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Frame from './frames/frame';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fruit Deliver</h1>

          <ul class="nav nav-pills">

   <li role="presentation" class="active"><a href="#">Home</a></li>
   <li role="presentation"><a href="#">Profile</a></li>
   <li role="presentation"><a href="#">Messages</a></li>
   </ul>
        </header> <br/><br/>

        <div className="App-intro">
        <br/>
        <p class="bg-primary"> One fresh fruit box per day, keep the doctor away.</p>

        <p class="bg-success">To get a fresh fruit box
        Order online or call us now</p>

        </div>

        <Frame />

        <img src={logo} className="App-logo" alt="logo" />
        <div>{"one"}</div>
        <div>{"two"}</div>
        <div>{"three"}</div>

      </div>

    );
  }
}

export default App;
