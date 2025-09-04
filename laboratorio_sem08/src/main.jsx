import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Inicio from "./pages/Inicio.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Carrito from "./pages/Carrito.jsx";
import './index.css'


function App(){
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100'>
        <Navbar />
        <main className='max-w-6xl mx-auto p-4'>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/catalogo' element={<Catalogo/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
