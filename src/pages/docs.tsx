import * as React from 'react'


import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const Docs = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Documentation for the front-end and control API</h1>
        <p>React Components docs</p>
        <p>API docs</p>
      </Container>
    </Page>
  </IndexLayout>
)

export default Docs
