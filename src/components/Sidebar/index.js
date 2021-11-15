import {FolderIcon, HomeIcon, TemplateIcon, TrashIcon, UsersIcon, MapIcon} from '@heroicons/react/outline';
import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block shadow-lg">
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/dashboard">
                    React Tailwind
                </a>
                <ul className="mt-6">
                    <li className="px-2 py-1 items-center">
                        <Link to="/dashboard">
                            <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                                <HomeIcon className="h-4 w-4 mr-2" />
                                <span>Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li className="px-2 py-1 items-center">
                        <Link to="/core-components">
                            <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                                <FolderIcon className="h-4 w-4 mr-2" />
                                <span>Core Components</span>
                            </div>
                        </Link>
                    </li>
                    <li className="px-2 py-1 items-center">
                        <Link to="/dashboard">
                            <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                                <UsersIcon className="h-4 w-4 mr-2" />
                                <span>Team</span>
                            </div>
                        </Link>
                    </li>
                    <li className="px-2 py-1 items-center">
                        <Link to="/blank">
                            <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                                <TemplateIcon className="h-4 w-4 mr-2" />
                                <span>Blank Page</span>
                            </div>
                        </Link>
                    </li>
                    <li className="px-2 py-1 items-center">
                        <Link to="/maps">
                            <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                                <MapIcon className="h-4 w-4 mr-2" />
                                <span>Maps</span>
                            </div>
                        </Link>
                    </li>
                    <li className="px-2 py-1 items-center">
                        <Link to="/nothing-here">
                            <div className="text-sm px-4 py-2 flex items-center hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded">
                                <TrashIcon className="h-4 w-4 mr-2" />
                                <span>Empty</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
