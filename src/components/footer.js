import React from 'react'
import { Container, Icon, Segment } from 'semantic-ui-react'

const Footer = () => (
  <Segment inverted vertical>
    <Container textAlign="center">
      <p>
        Powered with <Icon name="heart" /> by Gatsby 2.0
      </p>
    </Container>
  </Segment>
)

export default Footer
