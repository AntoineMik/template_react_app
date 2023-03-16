import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({title, description, keywords, name, type}) {
    return (
        <Helmet>
            { /* Standard metadata tags */ }
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            { /* End standard metadata tags */ }
            { /* Facebook tags */ }
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:keywords" content={keywords} />
            { /* End Facebook tags */ }
            { /* Twitter tags */ }
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:keywords" content={keywords} />
            { /* End Twitter tags */ }
        </Helmet>
    )
}