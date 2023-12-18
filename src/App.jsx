import './App.css'
import Landing from './pages/Landing'
import Searchbar from './pages/searchbar/Searchbar'
import Dashboard from './pages/dashboard/Dashboard'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

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
      <ThemeProvider theme={theme}>

  <Searchbar/>
    <Dashboard />
    </ThemeProvider>
    </>
  )
}

export default App
