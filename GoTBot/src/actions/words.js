import React from 'react'
import fetch from 'isomorphic-fetch'
import { RequestContext, Text } from '@botonic/react'

export default class extends React.Component {
    static contextType = RequestContext

    static async botonicInit({ input, session, params, lastRoutePath }) {
        const url = input.payload

        const res = await fetch(url, {
        url: url,
        method: 'GET',
        params: {},
        })
        
        let house = await res.json()
        return { house }
    }

  render() {
    return (
        <>
            <Text>{this.props.house.words}</Text>
        </>
    )
  }
}