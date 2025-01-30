import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.js';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path = "/" element = {<Home></Home>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
