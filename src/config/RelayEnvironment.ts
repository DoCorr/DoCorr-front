import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store,
} from 'relay-runtime'

const oneMinute = 60 * 1000
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute })

const API_END_POINT =
  process.env.NODE_ENV === 'production' ? 'a' : 'http://localhost:9002/graphql'

function fetchQuery(operation: any, variables: any, cacheConfig: any) {
  const queryID = operation.text
  const isMutation = operation.operationKind === 'mutation'
  const isQuery = operation.operationKind === 'query'
  const forceFetch = cacheConfig && cacheConfig.force

  // Try to get data from cache on queries
  const fromCache = cache.get(queryID, variables)
  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache
  }

  // Otherwise, fetch data from server
  return fetch(API_END_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      // Update cache on queries
      if (isQuery && json) {
        cache.set(queryID, variables, json)
      }
      // Clear cache on mutations
      if (isMutation) {
        cache.clear()
      }

      return json
    })
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})

export default environment
