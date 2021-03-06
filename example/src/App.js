import React from 'react'
import { withStore } from 'react-context-hook'
import Header from './layout/Header'
import SetAmount from './SetAmountExample'
import SetUsernameExample from './SetUsernameExample'
import './App.css'
import SetObjectExample from './SetObjectExample'
import UseStoreExample from './UseStoreExample'
import UseSetAndDeleteExample from './UseSetAndDeleteExample'
import Description from './Description'
import UseStoreValueWithFalsyValues from './UseStoreValueWithFalsyValues'

function App() {
  return (
    <div>
      <Header />
      <main className="App">
        <Description />
        <SetAmount />
        <SetUsernameExample />
        <SetObjectExample />
        <UseStoreExample />
        <UseSetAndDeleteExample />
        <UseStoreValueWithFalsyValues />
      </main>
    </div>
  )
}

const initialState = { count: 10, logIn: false, counter: 0, nullValue: null }

const storeConfig = {
  listener: (state, key, prevValue, nextValue) => {
    if (process.env.NODE_ENV !== 'test') {
      console.log(`the key "${key}" changed in the store`)
      console.log('the old value is', prevValue)
      console.log('the current value is', nextValue)
      console.log('the state is', state)
    }
  },
  logging: process.env.NODE_ENV !== 'test'
}

export default withStore(App, initialState, storeConfig)
