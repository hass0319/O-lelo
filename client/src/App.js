// import logo from './logo.svg';
import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Speech from './components/Speech';
import Voice from './components/Voice';

function App({ props }) {
  return (
    <div className="App">
      <Speech />
      <Voice />
    </div>
  );
}
export default App;