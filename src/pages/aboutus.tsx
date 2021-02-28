import * as React from 'react'
import { Link } from 'gatsby'


import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const Aboutus = ({data}) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>About us</h1>
        <p>Who we are</p>


        <ul>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>

      </Container>
    </Page>
  </IndexLayout>
)

export default Aboutus

