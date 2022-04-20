import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )
 */

const Header = () => {
  return <div></div>;
};

Header.propTypes = {
  /**
   * Header name
   */
  name: PropTypes.string.isRequired,
};

export default Header;
