import { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Album from '../components/Album'
import albums from '../services/albums'
import { FaSearch } from 'react-icons/fa'

const Discografia = () => {
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState('')

  const handleSearchChange = (e) => {
    setSearchData(e.target.value)
  }

  const filtroBusqueda =
    data && searchData
      ? data.filter((p) =>
          p.title.toLowerCase().includes(searchData.toLowerCase()) ||
          p.cat.toLowerCase().includes(searchData.toLowerCase())
        )
      : data

  useEffect(() => {
    setData(albums)
  }, [])
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
          <div className='discografia__box--buscador'>
            <input type='text' onChange={handleSearchChange} />
            <FaSearch />
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
              {filtroBusqueda.map((album) => (
                <Album
                  key={album.id}
                  image={album.image}
                  title={album.title}
                  cat={album.cat}
                  href={album.href}
                />
              ))}
              {filtroBusqueda && filtroBusqueda.length === 0 && (
                <h3 className='discografia__box--noresult'>
                  No se encontró ningún album
                </h3>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discografia
