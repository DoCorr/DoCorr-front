import React from 'react'
import { graphql } from 'react-relay'
import { hot } from 'react-hot-loader/root'
import RelayEnvironment from './config/RelayEnvironment'
import { AppQuery } from './__generated__/AppQuery.graphql'
import {
  preloadQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
  useRelayEnvironment,
} from 'react-relay/hooks'

const appQuery = graphql`
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
`
const preloadedQuery = preloadQuery<AppQuery>(RelayEnvironment, appQuery, {
  /* query variables */
})

function App() {
  const data = usePreloadedQuery(appQuery, preloadedQuery)
  const environment = useRelayEnvironment()

  console.log('data', data)
  console.log(environment)
  return (
    <div>
      <header>App</header>
    </div>
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

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense fallback={'Loading...'}>
        <App />
      </React.Suspense>
    </RelayEnvironmentProvider>
  )
}

export default hot(AppRoot)
