import React from 'react'
import PropTypes from 'prop-types'

import HeaderMenu from './header-menu'
import SEO from './seo'

const Layout = ({ title, keywords, children }) => (
  <div>
    <SEO title={title} keywords={keywords} />
    <HeaderMenu activeItem={title} />
    {children}
  </div>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  keywords: ['genomics', 'blog', 'react', 'gatsby', 'genetics', 'bioinformatics']
}

export default Layout
