import React from 'react'
import PropTypes from 'prop-types'
const Header = ({name}) => {
  return (
    <div>Hola {name} </div>
  )
};

Header.propTypes = {
    name: PropTypes.string.isRequired
}

Header.defaultProps = {
  name:''
};

export default Header;