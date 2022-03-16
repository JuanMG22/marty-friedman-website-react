import aboutImage from '../img/about.jpg'

const about = {
  title: 'Acerca de Marty',
  description: `'Friedman es un guitarrista empírico, conocido por su improvisación y por
          fusionar la música oriental con estilos musicales de occidente, tales como el metal neoclásico, thrash
          metal y más adelante el rock progresivo, J-pop, jazz, new age y similares. Yendo más allá de las escalas
          tradicionales, Friedman frecuentemente usa arpegios en las escalas con las que toca, utilizando una
          técnica poco convencional de tocar las cuerdas, favoreciendo los movimientos hacia arriba. También es
          conocido por su uso frecuente de vibratos melódicos y extensos.'`
}

const { title, description } = about
const About = () => {
  return (
    <section className='about'>
      <div className='about__text' data-aos='fade-up'>
        <h2 className='about__text--heading'>
          <span className='about__text--span'>{title}</span>
        </h2>
        <p className='about__text--descripcion'>{description}</p>
      </div>
      <img
        loading='lazy' className='about__img' data-aos='fade-up'
        src={aboutImage}
        alt='Marty Friedman Photo'
      />
    </section>
  )
}

export default About
