import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Navbar from './components/nav';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
