
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Van pages/Homepage';
import About from './pages/Van pages/About';
import Vans from './pages/Van pages/Vans';

import './server'
import VanDetail from './pages/Van pages/VanDetail'
import Layout from './components/Layout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import Hostlayout from './components/Hostlayout';

import HostVans from './pages/host/HostVans';
import HostVanDetails from './pages/host/HostVanDetails';

import  Host_Van_Details from './components/Host_Van_Details';
import HostVanPricing from './components/HostVanPricing';
import HostVanPhotos from './components/HostVanPhotos';
import HostVanDetailsLayout from './components/HostVanDetailsLayout';

function App() {
  
  return (
    <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Layout />}>
             <Route index element={<Homepage />} />
             <Route path='about' element={<About />} />
             <Route path='vans' element={<Vans />} />
             <Route path='vans/:id' element={<VanDetail />} />

             <Route path='host' element={<Hostlayout />} >
               <Route index element={<Dashboard />} />
               <Route path='income' element={<Income />} />
               <Route path='reviews' element={<Reviews />} />
               <Route path='vans' element={<HostVans />} />
               <Route path='vans/:id' element={<HostVanDetails />}>
                <Route index element={<Host_Van_Details />} /> 
                <Route path='pricing' element={<HostVanPricing />} /> 
                <Route path='photos' element={<HostVanPhotos />} /> 
               </Route>
             </Route>
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
