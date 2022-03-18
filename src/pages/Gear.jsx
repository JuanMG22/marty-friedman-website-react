import imagen1 from '../img/jackson-logo.svg'
import imagen2 from '../img/engl-logo.png'
import imagen3 from '../img/emg-logo.png'
import imagen4 from '../img/boss-logo.png'
import imagen5 from '../img/mxr-logo.png'
import GearItemList from '../components/GearItemList'
import GearCat from '../components/GearCat'
import Helmet from 'react-helmet'

const marcasImages = [
  { src: imagen1, alt: 'Jackson Logo', id: 1 },
  { src: imagen2, alt: 'Jackson Logo', id: 2 },
  { src: imagen3, alt: 'Jackson Logo', id: 3 },
  { src: imagen4, alt: 'Jackson Logo', id: 4 },
  { src: imagen5, alt: 'Jackson Logo', id: 5 }
]

const Gear = () => {
  return (
    <>
      <Helmet>
        <meta name='description' content='Gear and equipment of Marty Friedman. Guitarist, producer, lyricist.' />
        <meta name='keywords' content='musical equipment, guitar signatures, amps, guitars, guitar pickups, guitar pedals, jackson, engl' />
        <title>Marty Friedman Gear</title>
      </Helmet>
      <section className='gear'>
        <div className='gear__box'>
          <div className='gear__box--heading'>
            <h1>Marty Friedman Gear</h1>
            <h2 className='gear__box--titulo'>
              <span className='gear__box--span'>Gear</span>
            </h2>
          </div>
          <div className='gear__box--marcas'>
            {marcasImages.map((image) => (
              <img
                loading='lazy'
                className='gear__box--marcas-logo'
                src={image.src}
                alt={image.alt}
                key={image.id}
              />
            ))}
          </div>
          <h3 className='gear__box--sub-titulo'>
            Marty uses signatures Jackson guitars, ENGL amps, EMG pickups, BOSS
            audio and MXR pedals.Discover more about.
          </h3>
          <div className='gear__box--categoria'>
            <GearCat />
            <div className='gear__box--img-container  js--gear-box'>
              <GearItemList />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gear
