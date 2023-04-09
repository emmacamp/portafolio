import './app.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Home } from './views/Home'


function App() {

  localStorage.setItem('language', 'en')

  return (
    <div className="App">
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portafolio" element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App
