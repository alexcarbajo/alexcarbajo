import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      hasScrolled: false
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  
  render() {
    return (
      <div className={this.state.hasScrolled ? 'o-Header hasScrolled' : 'o-Header'}>
        <div className="o-Header__content">
          <Link to="/" className="c-Logo">Alex Carbajo</Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
