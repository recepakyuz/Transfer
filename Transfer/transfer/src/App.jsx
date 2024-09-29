import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
      <Router>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <main style={{ flex: 1, padding: '20px' }}>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/about" element={<About/>} />
                  </Routes>
              </main>
              <Footer />
          </div>
      </Router>
  )
}

export default App
