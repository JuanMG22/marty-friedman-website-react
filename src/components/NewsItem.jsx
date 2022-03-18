const NewsItem = ({ image, date, title, description }) => {
  return (
    <div className='noticias-index__container--box'>
      <img
        loading='lazy'
        className='noticias-index__container--imagen img-thumbnail'
        src={image}
        alt='Marty Friedman with Jackson Guitar'
      />
      <time
        className='noticias-index__container--fecha'
        dateTime='04-02.2021'
      >
        {date}
      </time>
      <a
        className='noticias-index__container--link'
        href='./sections/noticias.html#noticia-1'
      >
        <h3 className='noticias-index__container--titulo'>
          {title}
        </h3>
      </a>
      <p className='noticias-index__container--parrafo'>
        {description}
      </p>
      <a
        className='btn btn-full btn-noticia'
        href='./sections/noticias.html#noticia-1'
      >
        Leer más
      </a>
    </div>
  )
}

export default NewsItem
