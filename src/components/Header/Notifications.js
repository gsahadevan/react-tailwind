import React, {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {BellIcon} from '@heroicons/react/solid';

function Notifications() {
    return (
        <>
            <Menu as="div" className="relative">
                <div>
                    <Menu.Button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
                        <span className="sr-only">Open notifications menu</span>
                        <BellIcon className="w-5 h-5" aria-hidden="true" />
                        <span
                            aria-hidden="true"
                            className="absolute animation-ping top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-pink-500 border-2 border-white rounded-full dark:border-gray-800"
                        ></span>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            <div className="flex justify-between text-sm px-4 py-2">
                                <span className="text-gray-700">Messages</span>
                                <span class="inline-flex items-center justify-center px-2 text-xs font-bold leading-none text-pink-100 bg-pink-500 rounded-md">
                                    9
                                </span>
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div className="flex justify-between text-sm px-4 py-2">
                                <span className="text-gray-700">Deadlines</span>
                                <span class="inline-flex items-center justify-center px-2 text-xs font-bold leading-none text-pink-100 bg-pink-500 rounded-md">
                                    2
                                </span>
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div className="flex justify-between text-sm px-4 py-2">
                                <span className="text-gray-700">Alerts</span>
                            </div>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
}

export default Notifications;
