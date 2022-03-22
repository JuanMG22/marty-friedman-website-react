import * as Scroll from 'react-scroll'
import YoutubeEmbed from './YoutubeEmbed'

const NewsDetail = ({ title, date, image, paras, video, id, videoTitle }) => {
  const Element = Scroll.Element
  return (
    <Element
      className='noticias__box--articulo'
      data-aos='fade-up'
      data-aos-delay='600'
      id={`noticia-${id}`}
    >
      <div className='noticias__box--articulo-heading'>
        <h3 className='noticias__box--titulo-noticia'>{title}</h3>
        <time className='noticias__box--fecha' dateTime='04-02.2021'>
          {date}
        </time>
      </div>
      <img
        loading='lazy'
        className='noticias__box--imagen'
        src={image}
        alt='Marty Friedman with Jackson Guitar'
      />
      {paras.map((para, i) => (
        <p className='noticias__box--parrafo' key={i}>
          {para}
        </p>
      ))}
      <p className='noticias__box--parrafo'>
        <strong>{videoTitle}</strong>
      </p>
      <YoutubeEmbed embedId={video} />
    </Element>
  )
}

export default NewsDetail
