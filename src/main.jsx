import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.css'
import SimpleReactLightbox from 'simple-react-lightbox'
import 'animate.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
)
