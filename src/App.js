import Navbar from './components/Navbar/navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Vedio from './Pages/Vedio/vedio';
import Home from './Pages/Home/home';
import { useState } from 'react';

function App() {
  const [sidebar,setSidebar] = useState(true);
  return (
    <div >
      
       <Navbar  setSidebar={setSidebar} />
       <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:categoryId/:vedioId" element={<Vedio />} />

       </Routes>
      
    </div>
  );
}

export default App;
