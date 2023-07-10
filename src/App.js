import React, { Component } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { Main } from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar />
        <Main />
      </div>
    );
  }
}

export default App;