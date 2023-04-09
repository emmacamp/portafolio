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
          <Route path='*' element={<h1 className='text-center text-9xl'>Not Found</h1>} />
        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App
