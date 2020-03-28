import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import { hot } from 'react-hot-loader/root'
import { Router } from '@reach/router'
import relayEnv from './config/realyEnv'
import { Global } from '@emotion/core'
import global from './styles/global'

function App() {
  return (
    <QueryRenderer
      environment={relayEnv}
      query={graphql`
        query AppQuery {
          allUsers {
            name
            id
            email
            profile_image
            password
            create_date
          }
        }
      `}
      variables={{
        pageId: '1',
      }}
      render={({ error, props }) => {
        const { allUsers } = props
        console.log(props)
        if (error) {
          return <div>Error!</div>
        }
        if (!props) {
          return <div>Loading...</div>
        }
        return <div>User ID: {props}</div>
      }}
    />
  )
  // return (
  //   <div className="app">
  //     <Global styles={global} />
  //     <h1>Docorr</h1>
  //     <label htmlFor="id">ID: </label>
  //     <input id="id" type="text" placeholder="id" />
  //     <label htmlFor="pwd">Password: </label>
  //     <input id="password" type="text" placeholder="password" />
  //     <button>로그인</button>
  //     <a href="#">회원가입</a>
  //   </div>
  // )
}

export default hot(App)
