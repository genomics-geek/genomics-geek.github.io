import React from 'react'
import PropTypes from 'prop-types'
import { Container, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'gatsby'

const HeaderMenu = ({ inverted }) => (
  <Segment vertical inverted={inverted} textAlign="center" className="masthead">
    <Container>
      <Menu size="large" pointing secondary inverted={inverted}>
        <Menu.Item
          icon={{ name: 'spy', size: 'big' }}
          as={Link}
          to="/"
        >
          <img alt="" src="https://s3.amazonaws.com/genomics-geek.com/genomics-geek-logo.png" />
        </Menu.Item>
        <Menu.Item
          name="about"
          as={Link}
          to="/about/"
        />
        <Menu.Item
          name="software"
          as={Link}
          to="/software/"
        />
        <Menu.Item
          name="publications"
          as={Link}
          to="/publications/"
        />
        <Menu.Item
          name="contact"
          as={Link}
          to="/contact/"
        />
        <Menu.Menu position="right">
          <Menu.Item
            as="a"
            href="https://github.com/genomics-geek"
            target="_blank"
            rel="noopener noreferrer"
            icon={{ name: 'github', size: 'large' }}
          />
          <Menu.Item
            as="a"
            href="https://www.linkedin.com/in/michael-gonzalez-762aa837"
            target="_blank"
            rel="noopener noreferrer"
            icon={{ name: 'linkedin', size: 'large' }}
          />
          <Menu.Item
            as="a"
            href="https://twitter.com/TheCanesBoy2010"
            target="_blank"
            rel="noopener noreferrer"
            icon={{ name: 'twitter', size: 'large' }}
          />
          <Menu.Item
            as="a"
            href="https://stackoverflow.com/users/6212061/genomics-geek"
            target="_blank"
            rel="noopener noreferrer"
            icon={{ name: 'stack overflow', size: 'large' }}
          />
        </Menu.Menu>
      </Menu>
    </Container>
  </Segment>
)

HeaderMenu.propTypes = {
  inverted: PropTypes.bool,
}

HeaderMenu.defaultProps = {
  inverted: true
}

export default HeaderMenu
