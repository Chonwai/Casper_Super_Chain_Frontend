import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/layouts/Footer';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.any.isRequired,
};

export default MyApp;
