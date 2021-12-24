import { AppType } from '@infras/shared/types';
import { sum } from '@infras/shared/utils';
import { Component } from '@infras/ui/react';
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Vite App</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>AppType.Web：{AppType.Web}</p>
        <p>sum(1, 1): {sum(1, 1)}</p>
        <Component />
      </header>
    </div>
  )
}

export default App
