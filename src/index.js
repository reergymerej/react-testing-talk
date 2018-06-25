import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import todoApp from './reducers'
const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
