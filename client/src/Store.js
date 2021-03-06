import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = CreateStore(rootReducer, {}, enhancers)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nRR = require('./reducers/index').default
    store.replaceReducer(nRR)
  })
}


export default Store