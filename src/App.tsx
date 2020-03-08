import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Router } from '@reach/router'
import { Global } from '@emotion/core'
import global from './styles/global'

function App() {
  return (
    <div className="app">
      <Global styles={global} />
      <Router />
    </div>
  )
}

export default hot(App)
