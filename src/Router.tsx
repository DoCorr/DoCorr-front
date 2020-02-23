import { Router, Link, Match } from '@reach/router'
import React from 'react'

const NavLink = (props: any) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? 'red' : 'blue',
        },
      }
    }}
  />
)
