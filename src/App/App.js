import logo from './logo.svg';
import './App.css';
import HomePage from '../HomePage/HomePageOne/HomePage';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
