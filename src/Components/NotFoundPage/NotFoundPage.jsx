import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFoundPage = () => (
    <div className="not-found">
        <p>Error 404 - Page not found !</p>
        <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;