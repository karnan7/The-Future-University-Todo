import React from 'react';
import PropTypes from 'prop-types';

const Button = ({value, variant}) => {

  const buttonClassName = `bg-button-green text-white rounded-xl ${variant ==='small' ? 'w-20 text-md py-2' : 'w-36 text-xl py-4'}`

  return (
    <button className={buttonClassName}>{value}</button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  variant:PropTypes.oneOf(['big', 'small']).isRequired,
}
Button.defaultProps = {
  variant:'big'
}

export default Button;