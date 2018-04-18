import React, { Component } from 'react';
import './style/App.css';
import Header from './components/ui/Header';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
