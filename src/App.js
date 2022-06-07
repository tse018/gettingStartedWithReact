import './style/App.css';
import Logo from './components/Logo';
import FirstLesson from './components/FirstLesson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <FirstLesson />

    </div>
  );
}

export default App;
