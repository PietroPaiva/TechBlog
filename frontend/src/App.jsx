import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/appRoutes.jsx'
import Header from './components/header/header.jsx'


function App() {

  return (
    <>

    <BrowserRouter>
    <Header />
    <AppRoutes />

    </BrowserRouter>
    </>
  )
}

export default App
