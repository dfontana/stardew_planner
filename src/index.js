import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

injectGlobal`
  #root {
    display: grid;
    grid-template-columns: 20px auto;
    grid-template-rows: 20px auto;
    grid-template-areas: 
      ". palette_top" 
      "palette_left canvas";
    height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: lime;
  }
`
registerServiceWorker()
