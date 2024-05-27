import React from 'react';
import { Link } from 'react-router-dom';
// import {BanIcon} from '@heroicons/react/outline';

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center">
            {/* <BanIcon className="w-12 h-12 mt-8 text-purple-600" aria-hidden="true" /> */}
            <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">404</h1>
            <p className="text-gray-700 dark:text-gray-300">
                Page not found. Check the address or{' '}
                <a className="text-purple-600 hover:underline dark:text-purple-300" href="../index.html">
                    go back
                </a>


                <Link to={'/'}>Home page</Link>
                .
            </p>
        </div>
    );
}

export default NotFoundPage;
