import imagen1 from '../img/galeria-1.jpg'
import imagen2 from '../img/galeria-2.jpg'
import imagen3 from '../img/galeria-3.jpg'
import imagen4 from '../img/galeria-4.jpg'
import imagen5 from '../img/galeria-5.jpg'
import imagen6 from '../img/galeria-6.jpg'
import imagen7 from '../img/galeria-7.jpg'
import imagen8 from '../img/galeria-8.jpg'
import imagen9 from '../img/galeria-9.jpg'
import imagen10 from '../img/galeria-10.jpg'
import imagen11 from '../img/galeria-11.jpg'
import imagen12 from '../img/galeria-12.jpg'
import { SRLWrapper } from 'simple-react-lightbox'

const images = [
  { image: imagen1, id: 1 },
  { image: imagen2, id: 2 },
  { image: imagen3, id: 3 },
  { image: imagen4, id: 4 },
  { image: imagen5, id: 5 },
  { image: imagen6, id: 6 },
  { image: imagen7, id: 7 },
  { image: imagen8, id: 8 },
  { image: imagen9, id: 9 },
  { image: imagen10, id: 10 },
  { image: imagen11, id: 11 },
  { image: imagen12, id: 12 }
]

const options = {
  settings: {
    hideControlsAfter: 1500,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'backOut',
    slideAnimationType: 'slide',
    slideTransitionSpeed: 0.3,
    slideTransitionTimingFunction: 'backOut',
    overlayColor: 'rgba(255, 255, 255, 0.98)',
    backgroundColor: '#fff'
  },
  buttons: {
    showAutoplayButton: true,
    showDownloadButton: false,
    showThumbnailsButton: true,
    size: '45px'
  },
  caption: {
    captionColor: '#000',
    captionFontFamily: 'Raleway, sans-serif',
    captionFontWeight: '300',
    captionTextTransform: 'uppercase'
  }
}

const Galeria = () => {
  return (
    <section className='galeria'>
      <div className='galeria__box'>
        <div className='galeria__box--heading'>
          <h1>Marty Friedman Galeria</h1>
          <h2 className='galeria__box--titulo'>
            <span className='galeria__box--span'>Galeria</span>
          </h2>
        </div>
        <SRLWrapper options={options}>
          <div className='galeria__box--container'>
            {images.map((image) => (
              <div className='galeria__box--imagen-container' key={image.id}>
                <img alt='Marty Friedman photo' src={image.image} className='galeria__box--img' />
              </div>
            ))}
          </div>
        </SRLWrapper>
      </div>
    </section>
  )
}

export default Galeria
