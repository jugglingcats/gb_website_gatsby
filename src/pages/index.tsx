import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>glowbuzzer</h1>
          <h2>a web stack toolkit for building machine controls</h2>
        <p>Welcome to the gb website.</p>
        <p>Now lets go build something that moves</p>
        <Link to="/features/">See features of the product</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
