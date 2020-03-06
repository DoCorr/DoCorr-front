import { Router, Link, Match } from '@reach/router'
import React from 'react'
import { RouteTypes } from './types'

type GlobalRouterProps = {
  routes: [RouteTypes]
}
const GlobalRouter = ({ routes }: GlobalRouterProps) => {
  return (
    <Router>
      {routes.map(route => (
        <NavLink key={route.name} to={route.to}>
          Home
        </NavLink>
      ))}
    </Router>
  )
}

type NavLinkProps = {
  children?:
}
const NavLink = ({children?: React.ReactNode, to: string}) => (
  <Link
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? 'red' : 'blue',
        },
      }
    }}
    to={to}
  >
    {children}
  </Link>
)

const AppRouter = () => {
  const router = <GlobalRouter routes={[home]} />
  return router
}

export default AppRouter
