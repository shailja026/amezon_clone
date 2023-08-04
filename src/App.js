
import './App.css';
import Home from './pages/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
