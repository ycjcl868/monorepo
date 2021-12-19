import { AppType } from '@infras/shared/types';
import { sum } from '@infras/shared/utils';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
