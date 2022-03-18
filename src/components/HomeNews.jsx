import noticiaImagen1 from '../img/noticia-imagen-1.jpg'
import noticiaImagen2 from '../img/noticia-imagen-2.jpg'
import noticiaImagen3 from '../img/noticia-imagen-3.jpg'
import NewsItem from './NewsItem'

const noticias = [
  {
    date: '26 de octubre de 2021',
    image: noticiaImagen1,
    title: 'Jackson Guitars and Marty Friedman Team Up for the Pro Series MF-1',
    description: 'Jackson continues its longstanding relationship with guitarist Marty Friedman by honoring the virtuoso with the all-new Pro Series MF-1.',
    id: 1
  },
  {
    date: '20 de octubre de 2021',
    image: noticiaImagen2,
    title: 'Jackson Guitars and Marty Friedman Team Up for the Pro Series MF-1',
    description: 'Megadeth Guitarist Kiko Loureiro invited Marty Friedman to play on Open Source Solo Album "To show that music is not a competition',
    id: 2
  },
  {
    date: '18 de octubre de 2021',
    image: noticiaImagen3,
    title: 'Jackson Guitars and Marty Friedman Team Up for the Pro Series MF-1',
    description: "Megadeth frontman Dave Mustaine looked back on the band's early days, firing guitarist Chris Poland, hiring Marty Friedman, and more.",
    id: 3
  }
]

const HomeNews = () => {
  return (
    <section className='noticias-index'>
      <h2 className='noticias-index__heading' data-aos='fade-up'>
        <span className='noticias-index__heading--span'>Noticias</span>
      </h2>
      <div
        className='noticias-index__container'
        data-aos='fade-up'
        data-aos-delay='300'
      >
        {
          noticias.map(noticia => (
            <NewsItem
              key={noticia.id}
              title={noticia.title}
              image={noticia.image}
              description={noticia.description}
              date={noticia.date}
            />
          ))
      }
      </div>
    </section>
  )
}

export default HomeNews
