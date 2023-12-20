import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Searchbar from './pages/searchbar/Searchbar'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import ComponentsMount from './ComponentsMount';
import Maps from './pages/Maps'
import Dash2 from './pages/Dash/DashBoard';
// import Recommendation from './pages/Recommendation';

function App() {
  return(<>
  <BrowserRouter>
  <Routes>
   
    <Route path='/dashboard1' element={<><ComponentsMount/></>} />
    <Route path='/dashboard2' element={<><ComponentsMount dash2={true} /></>} />
    <Route path='/dash2' element ={<Dash2 />} />
      {/* <Route path='/heck' element ={<Recommendation />} /> */}
    <Route path='/' element={<Landing/>} />
    <Route path='/map' element={<Maps />} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
