
const Tour = () => {
  return (
    <section className='tour'>
      <div className='tour__box'>
        <div className='tour__box--heading'>
          <h1>Marty Friedman Tour</h1>
          <h2 className='tour__box--titulo'>
            <span className='tour__box--span'>Tour</span>
          </h2>
        </div>
        <div className='tour-contenedor'>
          <a
            className='bit-widget-initializer'
            data-artist-name='marty friedman'
            data-display-local-dates='false'
            data-display-past-dates='true'
            data-auto-style='false'
            data-text-color='#FFFFFF'
            data-link-color='#dba520'
            data-background-color='rgba(0,0,0,0)'
            data-display-limit='10'
            data-display-start-time='true'
            data-link-text-color='#FFFFFF'
            data-display-lineup='false'
            data-display-play-my-city='false'
            data-separator-color='rgba(124,124,124,0.25)'
          />
        </div>
      </div>
    </section>
  )
}

export default Tour
