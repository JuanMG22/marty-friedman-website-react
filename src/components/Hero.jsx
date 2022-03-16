const Hero = () => {
  return (
    <section className='encabezado' id='encabezado-id' data-aos='fade-up'>
      <div className='encabezado__box' data-aos='fade-up'>
        <div className='encabezado__box--text'>
          <h1 className='encabezado__box--titulo'>Marty Friedman</h1>
          <h2>Escucha el último album</h2>
          <a href='https://open.spotify.com/album/25iszifCj3DHz8NAIgHFAu' target='_blank' className='btn btn-full' rel='noreferrer'>
            TOKYO JUKEBOX 3
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
