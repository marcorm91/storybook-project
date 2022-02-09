import React from 'react';
import PropTypes from 'prop-types';
import Breakpoint from './breakpoint';

const { object } = PropTypes;

export default function DesktopBreakpoint(props) {
  return <Breakpoint name="desktop">{props.children}</Breakpoint>;
}

DesktopBreakpoint.propTypes = {
  children: object
};
