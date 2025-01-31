import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.js';
import Merchandise from './pages/Merchandise/Merchandise.js';
import Auction from './pages/Auction/Auction.js';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Merchandise' element={<Merchandise/>}></Route>
          <Route path='/Auction' element={<Auction/>}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
