import noticiaImagen1 from '../img/noticia-imagen-1.jpg'

const News = () => {
  return (
    <section className='noticias'>
      <div className='noticias__box'>
        <div className='noticias__box--heading'>
          <h1>Marty Friedman Noticias</h1>
          <h2 className='noticias__box--titulo'>
            <span className='noticias__box--span'>Noticias</span>
          </h2>
        </div>
        <article className='noticias__box--articulo' id='noticia-1' data-aos='fade-up' data-aos-delay='600'>
          <div className='noticias__box--articulo-heading'>
            <h3 className='noticias__box--titulo-noticia'>Jackson Guitars and Marty Friedman
              Team Up for the Pro Series Signature MF-1
            </h3>
            <time className='noticias__box--fecha' datetime='04-02.2021'>26 de octubre de
              2021
            </time>
          </div>
          <img
            loading='lazy' className='noticias__box--imagen' src={noticiaImagen1}
            alt='Marty Friedman with Jackson Guitar'
          />
          <p className='noticias__box--parrafo'>Scottsdale, AZ (February 4, 2021) -- Jackson continues
            its longstanding relationship with guitarist Marty Friedman by honoring the
            virtuoso with the all-new Pro Series Signature Marty Friedman MF-1.
          </p>
          <p className='noticias__box--parrafo'>One of the most influential and respected players in
            the world, Marty Friedman’s impactful and game-changing contributions to heavy
            metal and guitar in general continue to inspire generations of musicians and
            music fans to this day. He defined modern guitar playing with Jason Becker in
            Cacophony, was a key element in the wildly successful rise of thrash pioneers
            Megadeth, and with his “Marty-esque” improvisations and exotic fusion of Eastern
            and Western music, has achieved global success as a solo artist.
          </p>
          <p className='noticias__box--parrafo'>Metal magnificent, the all-new Pro Series Signature Marty Friedman MF-1 features a mahogany body with a cracked Purple Mirror top finish, complete with 3-ply white/abalone/white body binding, all-black hardware and reverse Jackson 3x3 (3 over, 3 under) AT-1 black headstock.
          </p>
          <p className='noticias__box--parrafo'>“It’s just a gorgeous guitar,” said Friedman. “The people at Jackson came up with a way to develop this – it’s actually really a custom type of job but they managed to do it in such a way to put it out to the public at a reasonable price point.
          </p>
          <p className='noticias__box--parrafo'>“I used this model in the photo session for my Tokyo
            Jukebox 3 album, and you really can’t take a bad picture with this guitar.
            Depending on how the light hits it, it really changes its personality and image
            a lot.”
          </p>
          <p className='noticias__box--parrafo'>The 24.75”-scale signature model is loaded with
            premium features to match the demanding needs of an elite and intricate player
            like Friedman, including a graphite-reinforced mahogany set-neck with scarf
            joint and bound 12” radius ebony fingerboard with 22 jumbo frets and pearloid
            block inlays. Passive EMG MF signature humbucking pickups deliver a sound that
            sings and screams, with a three-way toggle switch, two tone and two volume
            controls to wrangle all of the subtle nuances out of the guitar.
          </p>
          <p className='noticias__box--parrafo'>The sig instrument is complete with a Jackson
            TOM-style adjustable bridge with anchored tailpiece for improved intonation and
            enhanced sustain.
          </p>
          <p className='noticias__box--parrafo'><strong>Watch the company's video demo:</strong></p>
          <iframe
            loading='lazy' className='noticias__box--video' src='https://www.youtube.com/embed/mhl7OC1GEy0'
            title='YouTube video player' frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
        </article>
      </div>
    </section>
  )
}

export default News
