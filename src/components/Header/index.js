import React, {useContext, Fragment} from 'react';
import {SidebarContext} from '../../contexts/SidebarContext';
import {WindmillContext} from '@windmill/react-ui';
import {Menu, Transition} from '@headlessui/react';
import {SearchIcon, MenuIcon} from '@heroicons/react/outline';
import {BellIcon, MoonIcon, SunIcon} from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

function Header() {
    const {mode, toggleMode} = useContext(WindmillContext);
    const {toggleSidebar} = useContext(SidebarContext);

    return (
        <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
            <div className="container flex items-center justify-end h-full px-6 mx-auto text-blue-600 dark:text-blue-300">
                {/* <!-- Mobile hamburger --> */}
                <button
                    className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                    onClick={toggleSidebar}
                    aria-label="Menu"
                >
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                {/* <!-- Search input --> */}
                <div className="flex justify-center flex-1 lg:mr-32">
                    <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                        <div className="absolute inset-y-0 flex items-center pl-2">
                            <SearchIcon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <input type="search" className="pl-8 text-gray-700 text-sm" placeholder="Search for projects" aria-label="Search" />
                    </div>
                </div>
                <div className="flex items-center pr-2">
                    {/* <!-- Theme toggler --> */}
                    <div className="flex">
                        <button
                            className="rounded-md focus:outline-none focus:shadow-outline-purple"
                            onClick={toggleMode}
                            aria-label="Toggle color mode"
                        >
                            {mode === 'dark' ? (
                                <SunIcon className="w-5 h-5" aria-hidden="true" />
                            ) : (
                                <MoonIcon className="w-5 h-5" aria-hidden="true" />
                            )}
                        </button>
                    </div>
					{/* Notifications dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
                                <span className="sr-only">Open notifications menu</span>
                                <BellIcon className="w-5 h-5" aria-hidden="true" />
                                <span
                                    aria-hidden="true"
                                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
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
                                        <span class="inline-flex items-center justify-center px-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-md">
                                            9
                                        </span>
                                    </div>
                                </Menu.Item>
                                <Menu.Item>
                                    <div className="flex justify-between text-sm px-4 py-2">
                                        <span className="text-gray-700">Deadlines</span>
                                        <span class="inline-flex items-center justify-center px-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-md">
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
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
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
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Your Profile
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Settings
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        <Link to="/login">Sign out</Link>
                                    </a>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;