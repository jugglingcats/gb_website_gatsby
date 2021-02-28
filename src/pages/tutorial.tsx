import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const Tutorial = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Tutorial: An intro to the glowbuzzer control</h1>
        <p>Basic introduction to get an EtherCAT motor moving</p>

      </Container>
    </Page>
  </IndexLayout>
)

export default Tutorial
