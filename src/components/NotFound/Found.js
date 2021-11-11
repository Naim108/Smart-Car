import React from 'react';
import { Link } from 'react-router-dom';

const Found = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to='/home'>Back home</Link>
        </div>
    );
};

export default Found;