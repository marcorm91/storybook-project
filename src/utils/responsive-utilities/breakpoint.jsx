import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const breakpoints = {
  phone: '(max-width: 767px)',
  tablet: '(max-width: 1024px)',
  desktop: '(min-width: 1025px)'
};

const { string, object } = PropTypes;

export default function Breakpoint(props) {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;

  return (
    <MediaQuery {...props} query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}
