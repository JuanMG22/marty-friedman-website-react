import guitarra1 from '../img/guitarra-1.png'
import guitarra2 from '../img/guitarra-2.png'
import guitarra3 from '../img/guitarra-3.png'
import guitarra4 from '../img/guitarra-4.png'
import guitarra5 from '../img/guitarra-5.png'

import amp1 from '../img/amp-1.png'
import amp2 from '../img/amp-2.png'

import pedal1 from '../img/pedal-1.png'
import pedal2 from '../img/pedal-5.png'
import pedal3 from '../img/pedal-3.png'
import pedal4 from '../img/pedal-4.png'
import pedal5 from '../img/pedal-2.png'

import pickup1 from '../img/pickups-1.png'

const items = [
  {
    title: 'Jackson USA Signature Marty Friedman MF-1',
    src: guitarra1,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'gt',
    cls: 'gear__box--guitarras',
    id: 1
  },
  {
    title: 'Jackson USA Signature Marty Friedman MF-1',
    src: guitarra2,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'gt',
    cls: 'gear__box--guitarras',
    id: 2
  },
  {
    title: 'Jackson USA Signature Marty Friedman MF-1',
    src: guitarra3,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'gt',
    cls: 'gear__box--guitarras',
    id: 3
  },
  {
    title: 'Jackson USA Signature Marty Friedman MF-1',
    src: guitarra4,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'gt',
    cls: 'gear__box--guitarras',
    id: 4
  },
  {
    title: 'Jackson USA Signature Marty Friedman MF-1',
    src: guitarra5,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'gt',
    cls: 'gear__box--guitarras',
    id: 5
  },
  {
    title: 'Jackson USA Signature Marty Friedman MF-1',
    src: amp1,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'amps',
    cls: 'gear__box--amps',
    id: 6
  },
  {
    title: 'Jackson USA Signature Marty Friedman MF-1',
    src: amp2,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'amps',
    cls: 'gear__box--amps',
    id: 7
  },
  {
    title: 'Boss Delay DD 500',
    src: pedal1,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'pedales',
    cls: 'gear__box--pedals',
    id: 8
  },
  {
    title: 'Boss Delay DD 500',
    src: pedal2,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'pedales',
    cls: 'gear__box--pedals',
    id: 9
  },
  {
    title: 'Boss Delay DD 500',
    src: pedal3,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'pedales',
    cls: 'gear__box--pedals',
    id: 10
  },
  {
    title: 'Boss Delay DD 500',
    src: pedal4,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'pedales',
    cls: 'gear__box--pedals',
    id: 11
  },
  {
    title: 'Boss Delay DD 500',
    src: pedal5,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'pedales',
    cls: 'gear__box--pedals-xl',
    id: 12
  },
  {
    title: 'Emg MF-SET',
    src: pickup1,
    link: 'https://www.jacksonguitars.com/en/guitars/artist-signature/usa-signature-marty-friedman-mf-1/2803333801.html',
    cat: 'pickups',
    cls: 'gear__box--pickups',
    id: 13
  }
]

const GearItemList = () => {
  return (
    <>
      {items.map((item) => (
        <figure className={`gear__box--figure ${item.cat}`} key={item.id}>
          <img
            loading='lazy'
            className={item.cls}
            src={item.src}
            alt={item.title}
          />
          <div className='gear__box--text-box'>
            <a href={item.link} target='_blank' rel='noreferrer'>
              <h3 className='gear__box--text'>{item.title}</h3>
              <h3 className='gear__box--text-link'>Leer más</h3>
            </a>
          </div>
        </figure>
      ))}
    </>
  )
}

export default GearItemList
