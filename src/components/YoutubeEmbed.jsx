
const YoutubeEmbed = ({ embedId }) => (
  <iframe
    width='853'
    height='480'
    src={`https://www.youtube.com/embed/${embedId}`}
    frameBorder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
    title='Embedded youtube'
    className='noticias__box--video'
  />
)

export default YoutubeEmbed
