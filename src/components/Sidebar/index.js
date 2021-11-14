import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
      <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
        <div className="py-4 text-gray-500 dark:text-gray-400">
            <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                React Tailwind
            </a>
            <ul className="mt-6">
                <li className="px-6 py-3 items-center">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-6 py-3 items-center">
                    <Link to="/core-components">Core Components</Link>
                </li>
                <li className="px-6 py-3 items-center">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="px-6 py-3 items-center">
                    <Link to="/blank">Blank Page</Link>
                </li>
                <li className="px-6 py-3 items-center">
                    <Link to="/nothing-here">Nothing Here</Link>
                </li>
            </ul>
        </div>
      </aside>
    );
}

export default Sidebar;
