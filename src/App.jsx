import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { DashBoard, Landing } from './pages'

function App() {
  return(<>
  <BrowserRouter>
  <Routes>
     <Route path='/' element={<Landing />} />
   
    <Route path='/dashboard' element={<DashBoard />} />
   
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
