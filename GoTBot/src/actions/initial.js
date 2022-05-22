import React from 'react'
import fetch from 'isomorphic-fetch'
import { RequestContext, Text, Carousel, Element, Pic, Title, Button } from '@botonic/react'

export default class extends React.Component {
    static contextType = RequestContext

    static async botonicInit({ input, session, params, lastRoutePath }) {
        
        const url1 = 'https://anapioficeandfire.com/api/houses/?hasWords=true&pageSize=50'

        const res1 = await fetch(url1, {
        url: url1,
        method: 'GET',
        params: {},
        })

        const h1 = await res1.json()

        const url2 = 'https://anapioficeandfire.com/api/houses/?hasWords=true&pageSize=50&page=2'
        
        const res2 = await fetch(url2, {
            url: url2,
            method: 'GET',
            params: {},
        })
        
        const h2 = await res2.json()

        h2.forEach(element => {
            h1.push(element)
        })

        let houses = h1
        
        return { houses }
    }

  render() {
    console.log(this.props.houses)
    return (
        <>
            <Text>Here are the Game of Thrones houses!</Text>
            {
            <Carousel>
                {this.props.houses.map((e) => (
                    <Element key={e.name}>
                        <Title>{e.name}</Title>
                        <Button onClick={() => (<><Text>{e.words}</Text></>)}>See words</Button>
                    </Element>
                ))}
            </Carousel> 
            }
            
      </>
    )
  }
}