import logo from '../img/logo-mb.png'
import { FaTwitter, FaInstagram, FaApple, FaSpotify, FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='pie'>
      <img
        loading='lazy'
        className='pie__logo'
        src={logo}
        alt='Logo marty Friedman'
      />
      <div className='pie__socialbox'>
        <a
          href='https://www.facebook.com/martyfriedman.official'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook className='pie__socialbox--social-icon' />
        </a>
        <a
          href='https://twitter.com/marty_friedman?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter className='pie__socialbox--social-icon ' />
        </a>
        <a
          href='https://www.instagram.com/martyfriedman/'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram className='pie__socialbox--social-icon ' />
        </a>
        <a
          href='https://music.apple.com/us/artist/marty-friedman/4511319'
          target='_blank'
          rel='noreferrer'
        >
          <FaApple className='pie__socialbox--social-icon ' />
        </a>
        <a
          href='https://www.youtube.com/channel/UC8p0ZqjT7f_zZiS-py5w-WQ'
          target='_blank'
          rel='noreferrer'
        >
          <FaYoutube className='pie__socialbox--social-icon ' />
        </a>
        <a
          href='https://open.spotify.com/artist/5czW6bitDSKbNBNDizRT9p'
          target='_blank'
          rel='noreferrer'
        >
          <FaSpotify className='pie__socialbox--social-icon ' />
        </a>
      </div>
      <div className='pie__parrafo'>
        <p className='pie__parrafo--texto'>
          Website designed & devoloped by
          <a
            className='pie__parrafo--link'
            target='_blank'
            href='https://www.linkedin.com/in/juan-manuel-gonz%C3%A1lez-041576218/'
            rel='noreferrer'
          >
            <strong>Juan Manuel González</strong>
          </a>
        </p>
        <p className='pie__parrafo--texto'>
          &copy; Copyright 2021 Marty Friedman
        </p>
      </div>
    </footer>
  )
}

export default Footer
