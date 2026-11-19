import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | DG Technix</title>
      </Helmet>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-9xl font-heading font-black text-gray-200 mb-6">404</h1>
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="btn btn-primary px-8 py-3.5 rounded-sm font-semibold">
          Return Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;