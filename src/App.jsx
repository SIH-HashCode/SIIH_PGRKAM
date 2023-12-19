import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Searchbar from './pages/searchbar/Searchbar'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import  DashBoard  from './pages/dashboard/Dashboard'
import ComponentsMount from './ComponentsMount';

const theme = createTheme({
  palette: {
    primary: {
      main:'#A5A4A4'
     
    },
    // You can add more custom colors if needed
    // For example, error, warning, success, etc.
  },
});
function App() {
  return(<>
  <BrowserRouter>
  <Routes>
     {/* <Route path='/' element={<Landing />} /> */}
   
    <Route path='/' element={<><ComponentsMount/></>} />
   
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
