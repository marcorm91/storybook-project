import React from 'react';
import PropTypes from 'prop-types';
import Breakpoint from './breakpoint';

const { object } = PropTypes;

export default function MobileBreakpoint(props) {
  return <Breakpoint name="phone">{props.children}</Breakpoint>;
}

MobileBreakpoint.propTypes = {
  children: object
};
