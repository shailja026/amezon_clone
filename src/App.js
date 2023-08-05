
import './App.css';
import Home from './pages/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Clothes from './Component/Clothes';
import Electronics from './Component/Electronics';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Products_Clothing' element={<Clothes/>}/>
      <Route path='/Products_Electronics' element={<Electronics/>} />
      <Route path='/SignIn' element = {<SignIn/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
