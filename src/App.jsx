import './App.css'
import 'aos/dist/aos.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
