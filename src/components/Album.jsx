const Album = ({ href, image, title, cat }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <figure className={`discografia__box--figure ${cat}`}>
        <img
          loading='lazy'
          className='discografia__box--imagen'
          src={image}
          alt='Marty Friedman Tokyo Jukebox 3'
        />
        <div className='discografia__box--efecto-hover'>
          <h3 className='discografia__box--titulo-album'>
            {title}
          </h3>
        </div>
      </figure>
    </a>
  )
}

export default Album
