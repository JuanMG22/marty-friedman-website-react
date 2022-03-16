import { Link } from 'wouter'

const NotFound = () => {
  return (
    <section className='encabezado'>
      <div className='encabezado__box'>
        <div className='encabezado__box--text'>
          <i className='encabezado__box--icon far fa-sad-tear' />
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
