import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrapLux.min.css'
import {Provider} from 'react-redux'
import store from './store.js'
// import './bootstrapLitera.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// serviceWorker.unregister()
