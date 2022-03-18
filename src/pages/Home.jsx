import Helmet from 'react-helmet'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import HomeNews from '../components/HomeNews'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta name='description' content='Official website of Marty Friedman. Guitarist, producer, lyricist. known for his tenure as the lead guitarist for heavy metal band Megadeth, as well as his 13 solo albums and tours. Friedman has resided in Tokyo, Japan since 2003, where he has appeared on over 700 Japanese television programs' />
        <meta name='keywords' content='music, metal, guitarist, thrash metal, band, japan, tour dates, marty friedman' />
        <title>Marty Friedman Website</title>
      </Helmet>
      <Hero />
      <HomeNews />
      <About />
      <Contact />
    </>
  )
}

export default Home
