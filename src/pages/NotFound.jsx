import { Link } from 'wouter'
import { FaRegSadTear } from 'react-icons/fa'

const NotFound = () => {
  return (
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
          <Link href='/'>
            <a className='btn btn-full'>
              Volver Atras
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
