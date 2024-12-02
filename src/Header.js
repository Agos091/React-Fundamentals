import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <>
      <h1>{props.title} </h1>
      {props.children}
    </>
  );
}
Header.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Header;
