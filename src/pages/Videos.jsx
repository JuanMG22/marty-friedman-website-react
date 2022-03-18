import Helmet from 'react-helmet'
import YoutubeEmbed from '../components/YoutubeEmbed'

const videos = [
  { emberId: '47wq9W90bAQ', id: 1 },
  { emberId: 'y9newkA4g7Q', id: 2 },
  { emberId: 'pXECaAsYD-s', id: 3 },
  { emberId: 'qEwEESAXHIE', id: 4 },
  { emberId: 'UKmKcsySlgE', id: 5 },
  { emberId: 'oR5iwoxh2rI', id: 6 }
]

const Videos = () => {
  return (
    <>
      <Helmet>
        <meta name='description' content='Find out the latest videos of Marty Friedman. Guitarist, producer, lyricist.' />
        <meta name='keywords' content='videoclips, guitar videos, performance videos ' />
        <title>Marty Friedman Videos</title>
      </Helmet>
      <section className='videos'>
        <div className='videos__box'>
          <div className='videos__box--heading'>
            <h1>Marty Friedman Videos</h1>
            <h2 className='videos__box--titulo'>
              <span className='videos__box--span'>últimos videos</span>
            </h2>
          </div>
          <h3 className='videos__box--text'>
            Suscríbete en{' '}
            <a
              className='videos__box--text-link'
              href='https://www.youtube.com/channel/UC8p0ZqjT7f_zZiS-py5w-WQ'
            >
              <strong>YouTube</strong>
            </a>{' '}
            para ver más
          </h3>
          <div className='videos__box--container'>
            {videos.map((video) => (
              <YoutubeEmbed embedId={video.emberId} key={video.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Videos
