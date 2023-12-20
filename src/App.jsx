import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Searchbar from './pages/searchbar/Searchbar'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import ComponentsMount from './ComponentsMount';
import Maps from './pages/Maps'
import Dash2 from './pages/Dash/DashBoard';
import Trending from './pages/trendings/Trending';

function App() {
  return(<>
  <BrowserRouter>
  <Routes>
   
    <Route path='/dashboard1' element={<><ComponentsMount/></>} />
    <Route path='/dashboard2' element={<><ComponentsMount dash2={true} /></>} />
    <Route path='/dash2' element ={<Dash2 />} />
    <Route path='/trendings' element ={<Trending />} />
      
    <Route path='/' element={<Landing />} />
    <Route path='/map' element={<Maps />} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
