import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My project with React
        </p>
        <Componente></Componente>
      </header>
    </div>
  );
}

export default App;
