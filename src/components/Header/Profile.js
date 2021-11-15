import React, {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {Link} from 'react-router-dom';
import {CogIcon, LogoutIcon, UserIcon} from '@heroicons/react/outline';

function Profile() {
    return (
        <>
            <Menu as="div" className="relative">
                <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://media-exp1.licdn.com/dms/image/C5103AQHkX_RexlgqHg/profile-displayphoto-shrink_100_100/0/1573309044204?e=1642636800&v=beta&t=bDYq_Fc8EnXzF42HCFPj17vVcDpBSYlOLGoITzvvqCY"
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
                            <a href="/profile" className="block px-2 py-1 text-sm text-gray-700">
                                <div className="text-sm px-2 py-1 flex items-center hover:bg-gray-100 rounded">
                                    <UserIcon className="h-4 w-4 mr-2" />
                                    <span>Profile</span>
                                </div>
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="/settings" className="block px-2 py-1 text-sm text-gray-700">
                                <div className="text-sm px-2 py-1 flex items-center hover:bg-gray-100 rounded">
                                    <CogIcon className="h-4 w-4 mr-2" />
                                    <span>Settings</span>
                                </div>
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="/login" className="block px-2 py-1 text-sm text-gray-700">
                                <Link to="/login">
                                    <div className="text-sm px-2 py-1 flex items-center hover:bg-gray-100 rounded">
                                        <LogoutIcon className="h-4 w-4 mr-2" />
                                        <span>Sign out</span>
                                    </div>
                                </Link>
                            </a>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
}

export default Profile;
