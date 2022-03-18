import logo from '../img/logo.png'
import logomb from '../img/logo-mb.png'
import { Link } from 'react-router-dom'

const navLinks = [
  { title: 'Noticias', id: 1, link: '/noticias' },
  { title: 'Tour', id: 2, link: '/tour' },
  { title: 'Discografia', id: 3, link: '/discografia' },
  { title: 'Galeria', id: 4, link: '/galeria' },
  { title: 'Videos', id: 5, link: '/videos' },
  { title: 'Gear', id: 6, link: '/gear' },
  { title: 'Contacto', id: 7, link: '/' }
]

const NavBar = () => {
  return (
    <header className='header'>
      <nav className='header__navegacion'>
        <Link to='/' className='header__navegacion--logolink'>
          <img
            loading='lazy'
            className='header__navegacion--logoimg'
            src={logo}
            alt='Marty Friedman Logo'
          />
          <button id='btn-logo'>
            <img
              loading='lazy'
              className='header__navegacion--logoimg-mb'
              src={logomb}
              alt='Marty Friedman Logo'
            />
          </button>
        </Link>
        <button id='btn-menu' className='header__navegacion--btn-menu'>
          <span className='header__navegacion--linea-1 header__navegacion--lineas' />
          <span className='header__navegacion--linea-2 header__navegacion--lineas' />
          <span className='header__navegacion--linea-3 header__navegacion--lineas' />
        </button>
        <ul className='header__navegacion--menu'>
          {navLinks.map((navLink) => (
            <li className='header__navegacion--item-menu' key={navLink.id}>
              <Link to={navLink.link} className='header__navegacion--link-menu'>
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar