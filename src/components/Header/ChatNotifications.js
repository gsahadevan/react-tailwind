import React from 'react';
import {ChatAltIcon} from '@heroicons/react/solid';
import {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/outline';

function ChatNotifications() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
                <ChatAltIcon
                    className="ml-3 w-5 h-5"
                    onClick={() => {
                        setOpen((open) => !open);
                    }}
                />
                <span
                    aria-hidden="true"
                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 overflow-hidden z-9999" onClose={setOpen}>
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="relative w-screen max-w-md">
                                    <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    Panel title
                                                </Dialog.Title>
                                                <button
                                                    className="bg-purple-900 text-purple-100 px-2 py-1 rounded"
                                                    onClick={() => {
                                                        setOpen((open) => !open);
                                                    }}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XIcon className="h-3 w-3" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                            {/* Replace with your content */}
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div
                                                    className="h-full border-2 border-dashed border-gray-200"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* /End replace */}
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

export default ChatNotifications;
