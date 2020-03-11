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
      <h1>Docorr</h1>
      <label htmlFor="id">ID: </label>
      <input id="id" type="text" placeholder="id" />
      <label htmlFor="pwd">Password: </label>
      <input id="password" type="text" placeholder="password" />
      <button>로그인</button>
      <a href="#">회원가입</a>
    </div>
  )
}

export default hot(App)
