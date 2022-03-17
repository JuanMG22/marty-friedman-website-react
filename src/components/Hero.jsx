const Hero = () => {
  return (
    <section className='encabezado' id='encabezado-id' data-aos='fade-up'>
      <div className='encabezado__slider--1' />
      <div className='encabezado__slider--2' />
      <div className='encabezado__slider--3' />
      <div className='encabezado__slider--4' />
      <div className='encabezado__box' data-aos='fade-up'>
        <div className='encabezado__box--text' data-aos='zoom-out-down' data-aos-delay='900'>
          <h1 className='encabezado__box--titulo'>Marty Friedman</h1>
          <h2>Escucha el último album</h2>
          <a href='https://open.spotify.com/album/25iszifCj3DHz8NAIgHFAu' target='_blank' rel='noreferrer' className='btn btn-full' data-aos='zoom-out-up' data-aos-delay='1100'>
            TOKYO JUKEBOX 3
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
