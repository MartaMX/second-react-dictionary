import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  //logo by https://www.flaticon.com/authors/gowi
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className='text-center App-footer'>
        <small>Coded by MartaMX</small>
      </footer>
    </div>
  );
}
