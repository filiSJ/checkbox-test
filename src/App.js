import React, { Component } from 'react';
import './App.css';
import CheckboxComponent from './components/checkbox/checkbox-component';

const labels = ['test label1', 'test label2', 'test label3']
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Checkbox test app</h2>
        </div>
        <div className="App-content">
          <CheckboxComponent label={labels[0]}/>
          <CheckboxComponent label={labels[1]}/>
          <CheckboxComponent label={labels[2]}/>
        </div>
      </div>
    );
  }
}

export default App;
