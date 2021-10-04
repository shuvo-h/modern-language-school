import React from 'react';
import './notFound.css';

const NotFound = () => {
    return (
        <section className="not-found-container container text-center">
            <h1 className="text-danger">404</h1>
            <p >This page is not found.</p>
        </section>
    );
};

export default NotFound;