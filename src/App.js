
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Vans from './pages/Vans';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans' element={<Vans />} />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
