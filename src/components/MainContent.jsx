import { useEffect } from 'react'
import AOS from 'aos'
import Loader from './Loader'
import Home from '../pages/Home'
import Notfound from '../pages/Notfound.jsx'
import News from '../pages/News'
import Tour from '../pages/Tour'
import Discografia from '../pages/Discografia'
import { Routes, Route } from 'react-router-dom'
import Galeria from '../pages/Galeria'
import Videos from '../pages/Videos'
import Gear from '../pages/Gear'

const MainContent = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800
    })
  }, [])
  return (
    <main>
      <Loader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/noticias' element={<News />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/discografia' element={<Discografia />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/gear' element={<Gear />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </main>
  )
}

export default MainContent
