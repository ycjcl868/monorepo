import { AppType } from '@infras/shared/types';
import { sum } from '@infras/shared/utils';
import { Component } from '@infras/ui/react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Create React App</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <Component />
        <p>
        AppType.Web is {AppType.Web}
        </p>
        <p>
        sum(1, 1) is {sum(1, 1)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
