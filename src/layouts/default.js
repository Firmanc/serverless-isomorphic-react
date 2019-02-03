import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import Meta from '../components/meta';

const DefaultLayout = ({ children, meta }) => (
  <div>
    <Meta {...meta} />
    {children}
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

DefaultLayout.defaultProps = {
  children: noop,
  meta: {},
};

export default DefaultLayout;
