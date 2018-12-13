import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout title="Home">
    <Segment vertical inverted textAlign="center">
      <Container text>
        <Header inverted as="h1">Genomics Geek Website</Header>
        <Header inverted as="h2">Genetics. Software. Bioinformatics.</Header>
      </Container>
    </Segment>
  </Layout>
)

export default IndexPage
