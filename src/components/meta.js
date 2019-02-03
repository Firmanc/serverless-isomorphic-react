import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
  </Head>
);

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Meta.defaultProps = {
  title: 'Default Title',
  description: 'Default Description',
};

export default Meta;
