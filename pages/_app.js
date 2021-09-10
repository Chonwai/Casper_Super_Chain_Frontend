import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ChakraProvider>
                <Head>
                    <title>Casper Super Chain</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ChakraProvider>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.any.isRequired,
};

export default MyApp;
