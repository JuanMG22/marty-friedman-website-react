import imagen1 from '../img/jackson-logo.svg'
import imagen2 from '../img/engl-logo.png'
import imagen3 from '../img/emg-logo.png'
import imagen4 from '../img/boss-logo.png'
import imagen5 from '../img/mxr-logo.png'

const marcasImages = [
  { src: imagen1, alt: 'Jackson Logo', id: 1 },
  { src: imagen2, alt: 'Jackson Logo', id: 2 },
  { src: imagen3, alt: 'Jackson Logo', id: 3 },
  { src: imagen4, alt: 'Jackson Logo', id: 4 },
  { src: imagen5, alt: 'Jackson Logo', id: 5 }
]

const Gear = () => {
  return (
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
          <input
            className='gear__box--input'
            name='filtro'
            id='guitarras'
            type='radio'
            defaultChecked
          />
          <label className='gear__box--input guitarras' htmlFor='guitarras'>
            Guitarras
          </label>
          <input
            className='gear__box--input'
            name='filtro'
            id='amps'
            type='radio'
          />
          <label className='gear__box--input amps' htmlFor='amps'>
            Amps
          </label>
          <input
            className='gear__box--input'
            name='filtro'
            id='pickups'
            type='radio'
          />
          <label className='gear__box--input pickups' htmlFor='pickups'>
            Pickups
          </label>
          <input
            className='gear__box--input'
            name='filtro'
            id='pedales'
            type='radio'
          />
          <label className='gear__box--input pedales' htmlFor='pedales'>
            Pedales
          </label>
          <div className='gear__box--img-container  js--gear-box'>
            <figure className='gear__box--figure gt'>
              <img
                loading='lazy'
                className='gear__box--guitarras'
                src='../img/guitarra-1.png'
                alt='Jackson Marty Friedman MF 1 usa'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>
                    Jackson USA Signature Marty Friedman MF-1
                  </h3>
                  <h3 className='gear__box--text-link'>Leer más</h3>
                </a>
              </div>
            </figure>

            <figure className='gear__box--figure gt'>
              <img
                loading='lazy'
                className='gear__box--guitarras'
                src='../img/guitarra-2.png'
                alt='Jackson pro  Marty Friedman MF1'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.jacksonguitars.com/en/guitars/pro-series/pro-series-signature-marty-friedman-mf-1-purple-mirror/2919904552.html'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>
                    Jackson pro MF1 PURPLE MIRROR
                  </h3>
                  <h3 className='gear__box--text-link'>Leer más</h3>
                </a>
              </div>
            </figure>

            <figure className='gear__box--figure gt'>
              <img
                loading='lazy'
                className='gear__box--guitarras'
                src='../img/guitarra-3.png'
                alt='Jackson KE1 MF Marty Friedman'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.chorder.com/electric-guitars/jackson/ke1mf-marty-friedman-3201'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>
                    Jackson KE1 MF Marty Friedman
                  </h3>
                  <h3 className='gear__box--text-link'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure gt'>
              <img
                loading='lazy'
                className='gear__box--guitarras'
                src='../img/guitarra-4.png'
                alt='PRS Marty Friedman'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://prsguitars.com/artists/story/prs_signature_artist_marty_friedman_releases_new_album_inferno'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>PRS Marty Friedman</h3>
                  <h3 className='gear__box--text-link'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure gt'>
              <img
                loading='lazy'
                className='gear__box--guitarras'
                src='../img/guitarra-5.png'
                alt='Ibanez MFM2 LRD Marty Freidman'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://ibanez.fandom.com/wiki/MFM2'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>
                    Ibanez MFM2 LRD Marty Freidman
                  </h3>
                  <h3 className='gear__box--text-link'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure amps'>
              <img
                loading='lazy'
                className='gear__box--amps'
                src='../img/amp-1.png'
                alt='ENGL MARTY FRIEDMAN “INFERNO” SIGNATURE E766'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.engl-amps.com/marty-friedman-inferno-signature-e766'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>
                    ENGL MARTY FRIEDMAN “INFERNO” SIGNATURE E766
                  </h3>
                  <h3 className='gear__box--text-link'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure amps'>
              <img
                loading='lazy'
                className='gear__box--amps'
                src='../img/amp-2.png'
                alt='ENGL POWERBALL II E645II'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.engl-amps.com/marty-friedman-inferno-signature-e766'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>ENGL POWERBALL II E645II</h3>
                  <h3 className='gear__box--text-link'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure pickups'>
              <img
                loading='lazy'
                className='gear__box--pickups'
                src='../img/pickups-1.png'
                alt='EMG MF SET'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.emgpickups.com/guitar/signature-sets/mf-set.html'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>EMG MF SET</h3>
                  <h3 className='gear__box--text-link-pickups'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure pedales'>
              <img
                loading='lazy'
                className='gear__box--pedals'
                src='../img/pedal-3.png'
                alt='MXR Smart Gate'
              />
              <div className='gear__box--text-box'>
                <a
                  href='ttps://www.jimdunlop.com/mxr-smart-gate-noise-gate/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>MXR Smart Gate</h3>
                  <h3 className='gear__box--text-link-pedals'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure pedales'>
              <img
                loading='lazy'
                className='gear__box--pedals'
                src='../img/pedal-4.png'
                alt='MXR Phase 90'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.jimdunlop.com/mxr-phase-90/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>MXR Phase 90</h3>
                  <h3 className='gear__box--text-link-pedals'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure pedales'>
              <img
                loading='lazy'
                className='gear__box--pedals'
                src='../img/pedal-5.png'
                alt='MXR Phase 90'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.jimdunlop.com/mxr-bass-compressor/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>MXR Bass Compressor</h3>
                  <h3 className='gear__box--text-link-pedals'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure pedales'>
              <img
                loading='lazy'
                className='gear__box--pedals'
                src='../img/pedal-1.png'
                alt='BOSS Super Chorus CH1'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.boss.info/es-es/products/ch-1/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>BOSS Super Chorus CH1</h3>
                  <h3 className='gear__box--text-link-pedals'>Leer más</h3>
                </a>
              </div>
            </figure>
            <figure className='gear__box--figure pedales'>
              <img
                loading='lazy'
                className='gear__box--pedals-xl'
                src='../img/pedal-2.png'
                alt='BOSS Delay DD 500'
              />
              <div className='gear__box--text-box'>
                <a
                  href='https://www.boss.info/es-es/products/dd-500/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3 className='gear__box--text'>BOSS Delay DD 500</h3>
                  <h3 className='gear__box--text-link-pedals-xl'>Leer más</h3>
                </a>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gear
