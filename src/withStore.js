import React from 'react'
import StoreContext from './StoreContext'
import createStore from './redux/store'
import { createRawStore } from './rawStore'
import defaultConfig from './defaultConfig'

/**
 * This store can be used outside of React components.
 */
let rawStore = createRawStore(createStore())

/**
 * @param {ReactElement} WrappedComponent the component to connect with the store
 * @param {Object} initialValue an Object that will be the initial store value, or nothing
 * @param {Object} config the custom configuration. If nothing is passed, the default config will be used.
 * @param {Function} config.listener a function that is triggered each time the global state is modified. This function takes these parameters: (state, key, prevValue, nextValue). `state` is the value of the new state, `key` is the key that changed, `prevValue` is the old value of the key, `nextValule` is the new one.
 * @param {boolean} config.logging - default `false` - if true it will log changes to console
 * @example
 *const initialState = { count: 10 }
 *
 *const storeConfig = {
 *  listener: (state, key, prevValue, nextValue) => {
      console.log(`the key "${key}" changed in the store`)
      console.log('the old value is', prevValue)
      console.log('the current value is', nextValue)
      console.log('the state is', state)
    },
 *  logging: process.env.NODE_ENV !== 'production'
 *}
 *
 *export default withStore(App, initialState, storeConfig)
 */
export const withStore = (WrappedComponent, initialValue, config) => {
  const userConfig = Object.freeze({ ...defaultConfig, ...config })
  const store = createStore(initialValue, userConfig)
  rawStore = createRawStore(store)
  return function (props) {
    return (
      <StoreContext.Provider value={{ store }}>
        <WrappedComponent {...props} />
      </StoreContext.Provider>
    )
  }
}

export { rawStore }
