import Helmet from 'react-helmet'
import Album from '../components/Album'
import albums from '../services/albums'

const Discografia = () => {
  return (
    <>
      <Helmet>
        <meta name='description' content='Complete discography of Marty Friedman. Guitarist, producer, lyricist.' />
        <meta name='keywords' content='albums, discography, marty friedman' />
        <title>Marty Friedman Discografia</title>
      </Helmet>
      <section className='discografia'>
        <div className='discografia__box'>
          <div className='discografia__box--heading'>
            <h1>Marty Friedman Discografia</h1>
            <h2 className='discografia__box--titulo'>
              <span className='discografia__box--span'>Discografia</span>
            </h2>
          </div>
          <div className='discografia__box--categoria'>
            <input
              className='discografia__box--input'
              name='filtro'
              id='todo'
              type='radio'
              defaultChecked
            />
            <label className='discografia__box--input todo' htmlFor='todo'>
              Todo
            </label>
            <input
              className='discografia__box--input'
              name='filtro'
              id='megadeth'
              type='radio'
            />
            <label
              className='discografia__box--input megadeth'
              htmlFor='megadeth'
            >
              Megadeth
            </label>
            <input
              className='discografia__box--input'
              name='filtro'
              id='solista'
              type='radio'
            />
            <label className='discografia__box--input solista' htmlFor='solista'>
              Solista
            </label>
            <input
              className='discografia__box--input'
              name='filtro'
              id='cacophony'
              type='radio'
            />
            <label
              className='discografia__box--input cacophony'
              htmlFor='cacophony'
            >
              Cacophony
            </label>
            <input
              className='discografia__box--input'
              name='filtro'
              id='hawaii'
              type='radio'
            />
            <label className='discografia__box--input hawaii' htmlFor='hawaii'>
              Hawaii
            </label>
            <div className='discografia__box--albumes'>
              {albums.map((album) => (
                <Album
                  key={album.id}
                  image={album.image}
                  title={album.title}
                  href={album.href}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discografia
