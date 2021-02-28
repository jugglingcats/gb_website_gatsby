import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const Contact = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>How to contact us</h1>
        <p>Welcome to page 3</p>
        <ul>
          <li>
            <Link to="/a-markdown-page/">Show me some Markdown!</Link>
          </li>
          <li>
            <Link to="/page-2">Take me to page 2.</Link>
          </li>
        </ul>
      </Container>
    </Page>
  </IndexLayout>
)

export default Contact
