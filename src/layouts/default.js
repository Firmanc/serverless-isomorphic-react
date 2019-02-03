import React from 'react';

import Meta from '../components/meta';

const DefaultLayout = ({ children, meta }) => (
  <div>
    <Meta props={meta} />
    {children}
  </div>
);

export default DefaultLayout;
