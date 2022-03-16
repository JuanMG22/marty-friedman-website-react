import logo from '../img/logo.png'
import logomb from '../img/logo-mb.png'
import { Link } from 'wouter'

const navLinks = [
  { title: 'Noticias', id: 1 },
  { title: 'Tour', id: 2 },
  { title: 'Discografia', id: 3 },
  { title: 'Galeria', id: 4 },
  { title: 'Videos', id: 5 },
  { title: 'Gear', id: 6 },
  { title: 'Contacto', id: 7 }
]

const NavBar = () => {
  return (
    <header className='header'>
      <nav className='header__navegacion'>
        <Link href='/'>
          <a>
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
          </a>
        </Link>
        <button id='btn-menu' className='header__navegacion--btn-menu'>
          <span className='header__navegacion--linea-1 header__navegacion--lineas' />
          <span className='header__navegacion--linea-2 header__navegacion--lineas' />
          <span className='header__navegacion--linea-3 header__navegacion--lineas' />
        </button>
        <ul className='header__navegacion--menu'>
          {
            navLinks.map(navLink => (
              <li className='header__navegacion--item-menu' key={navLink.id}>
                <Link href='/noticias'>
                  <a
                    className='header__navegacion--link-menu'
                    href='./sections/noticias.html'
                  >
                    {navLink.title}
                  </a>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
