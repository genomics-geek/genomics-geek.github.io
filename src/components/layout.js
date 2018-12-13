import React from 'react'
import PropTypes from 'prop-types'

import HeaderMenu from './header-menu'
import Footer from './footer'
import SEO from './seo'

import './layout.css'

const Layout = ({ title, keywords, children }) => (
  <div>
    <div className="layout">
      <SEO title={title} keywords={keywords} />
      <HeaderMenu activeItem={title} />
      {children}
    </div>
    <Footer />
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
