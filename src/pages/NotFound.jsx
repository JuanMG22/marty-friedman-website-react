import { Link } from 'react-router-dom'
import { FaRegSadTear } from 'react-icons/fa'
import Helmet from 'react-helmet'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta name='description' content='Official website of Marty Friedman. Guitarist, producer, lyricist. known for his tenure as the lead guitarist for heavy metal band Megadeth, as well as his 13 solo albums and tours. Friedman has resided in Tokyo, Japan since 2003, where he has appeared on over 700 Japanese television programs' />
        <meta name='keywords' content='music, metal, guitarist, thrash metal, band, japan, tour dates, marty friedman' />
        <title>Página no encontrada</title>
      </Helmet>
      <section className='encabezado'>
        <div className='encabezado__slider--1' />
        <div className='encabezado__slider--2' />
        <div className='encabezado__slider--3' />
        <div className='encabezado__slider--4' />
        <div className='encabezado__box'>
          <div className='encabezado__box--text'>
            <FaRegSadTear className='encabezado__box--icon' />
            <h1 className='encabezado__box--titulo'>Error 404</h1>
            <h2>Pagina no encontrada</h2>
            <Link to='/'>
              <a className='btn btn-full'>
                Volver Atras
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
