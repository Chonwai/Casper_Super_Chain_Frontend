import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';
import React from 'react';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.elementType.isRequired,
};

export default MyApp;
