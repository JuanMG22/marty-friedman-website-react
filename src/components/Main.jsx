import { useEffect } from 'react'
import { Route, Switch } from 'wouter'
import Home from '../pages/Home'
import Notfound from '../pages/Notfound'
import AOS from 'aos'
import News from '../pages/News'

const Main = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800
    })
  }, [])
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/noticias' component={News} />
        <Route path='/:rest' component={Notfound} />
      </Switch>
    </main>
  )
}

export default Main
