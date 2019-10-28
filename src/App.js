import React from 'react';
import logo from './logo.svg';
import './App.css';
import PullRequestFetcher from './PullRequestFetcher'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PullRequestFetcher />
      </header>
    </div>
  );
}

export default App;
