import React from 'react';
import {ChatAltIcon} from '@heroicons/react/solid';

function ChatNotifications() {
    return (
        <>
            <div className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
                <ChatAltIcon className="ml-3 w-5 h-5" />
                <span
                    aria-hidden="true"
                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
            </div>
        </>
    );
}

export default ChatNotifications;
