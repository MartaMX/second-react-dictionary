import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  //logo by <a href="https://www.flaticon.com/free-icons/vocabulary" title="vocabulary icons">Vocabulary icons created by Freepik - Flaticon</a>
  return (
    <div className="App">
      <header className="App-header" id='titulo'>
        <img src={logo} className="App-logo img-fluid" alt="logo"/>
        <h1 className='title'>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className='text-center App-footer'>
        <small>Coded by <a className="GitHub" href='https://github.com/MartaMX/second-react-dictionary' >MartaMX</a></small>
      </footer>
    </div>
  );
}
