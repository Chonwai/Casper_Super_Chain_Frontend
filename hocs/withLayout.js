// hocs/withLayout.js
import React from 'react';

export default function withLayout(Component, Layout) {
    return () => (
        <Layout>
            <Component />
        </Layout>
    );
}
