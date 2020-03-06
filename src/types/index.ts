import routes from '../constants/routes'
import { ValueOf } from './utilityTypes'

type RouteTypes = ValueOf<typeof routes>

// eslint-disable-next-line prettier/prettier
export type {
  RouteTypes,
}
