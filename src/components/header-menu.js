import React from 'react'
import PropTypes from 'prop-types'
import { Container, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'gatsby'
import { toLower } from 'lodash'

import './header-menu.css'

const HeaderMenu = ({ activeItem, inverted }) => (
  <Segment vertical inverted={inverted} textAlign="center">
    <Container>
      <Menu className="header-menu" size="large" stackable pointing secondary inverted={inverted}>
        <Menu.Item
          as={Link}
          to="/"
        >
          <img alt="" src="https://s3.amazonaws.com/genomics-geek.com/genomics-geek-logo.png" />
        </Menu.Item>
        <Menu.Item
          name="about"
          as={Link}
          to="/about/"
          active={toLower(activeItem) === 'about'}
        />
        <Menu.Item
          name="blog"
          as={Link}
          to="/blog/"
          active={toLower(activeItem) === 'blog'}
        />
        <Menu.Item
          name="software"
          as={Link}
          to="/software/"
          active={toLower(activeItem) === 'software'}
        />
        <Menu.Item
          name="publications"
          as={Link}
          to="/publications/"
          active={toLower(activeItem) === 'publications'}
        />
        <Menu.Item
          name="contact"
          as={Link}
          to="/contact/"
          active={toLower(activeItem) === 'contact'}
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
