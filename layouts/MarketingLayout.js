// layouts/MarketingLayout.js
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

function MarketingLayout({ children }) {
    return (
        <>
            <Header />
            {/* <Component {...pageProps} /> */}
            <div>{children}</div>
            <Footer />
        </>
    );
}

MarketingLayout.propTypes = {
    children: PropTypes.elementType.isRequired,
    // pageProps: PropTypes.any.isRequired,
};

export default MarketingLayout;
