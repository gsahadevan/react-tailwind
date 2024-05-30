import React from 'react';
import BellIcon from '@heroicons/react/24/outline/BellIcon';

const Notification = () : JSX.Element => {
    return (
        <>
            <div className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple cursor-pointer">
                <BellIcon className="w-5 h-5" />
                <span
                    aria-hidden="true"
                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-pink-500 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
            </div>
        </>
    );
}

export default Notification;
