import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React, { Component } from 'react';
import logo from './logo.svg';
import apple from './apple.jpg';
import orange from './orange.jpeg';
import fruitbox from './fruitbox.jpg';
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
   <p align="right">Search icon on a styled button:
    <button type="button" class="btn btn-info">
      <span class="glyphicon glyphicon-search"></span> Search
    </button>
   </p>
   </ul>



        </header> <br/><br/>

        <div className="App-intro">
        <br/>
        <p class="bg-primary"> One fresh fruit box per day, keep the doctor away.</p>

        <p class="bg-success">To get a fresh fruit box
        Order online or call us now</p>

        </div>

        <Frame />
        <div class="row">
        <div class="col-sm-4">
        <img src={apple} className="img-thumbnail" alt="apple" />
        </div>
        <div class="col-sm-4">
        <img src={fruitbox} className="img-thumbnail" alt="fruitbox" />
        </div>
        <div class="col-sm-4">
        <img src={orange} className="img-thumbnail" alt="orange" />
        </div>
        </div>


        <div>{"one"}</div>
        <div>{"two"}</div>
        <div>{"three"}</div>

      </div>

    );
  }
}

export default App;
