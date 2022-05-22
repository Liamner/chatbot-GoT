import React from 'react'
import fetch from 'isomorphic-fetch'
import { RequestContext, Text } from '@botonic/react'

export default class extends React.Component {
    static contextType = RequestContext

    /*static async botonicInit({ input, session, params, lastRoutePath }) {
        const url = 'http://lebowski.me/api/quotes/random'

        const res = await fetch(url, {
        url: url,
        method: 'GET',
        params: {},
        })
        
        let quote = await res.json()
        return { quote }
    }*/

  render() {
    return (
        <>
            <Text>Quote!</Text>
        </>
    )
  }
}