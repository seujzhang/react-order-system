import React, { Component } from 'react';
import OrderList from '../OrderList';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <OrderList/>
      </div>
    );
  }
}

export default App;
