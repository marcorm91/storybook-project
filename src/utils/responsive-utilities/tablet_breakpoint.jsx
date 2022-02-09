import React from 'react';
import PropTypes from 'prop-types';
import Breakpoint from './breakpoint';

const { object } = PropTypes;

export default function TabletBreakpoint(props) {
  return <Breakpoint name="tablet">{props.children}</Breakpoint>;
}

TabletBreakpoint.propTypes = {
  children: object
};
