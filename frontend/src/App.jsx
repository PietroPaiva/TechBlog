import { useEffect } from 'react'
import api from './services/api.js'
import Header from './components/header/header.jsx'
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/appRoutes.jsx'

function App() {

  return (
    <BrowserRouter>

    <Header />
    <AppRoutes />

    </BrowserRouter>
  )
}

export default App
