import React from 'react';
import PageTitle from '../components/Typography/PageTitle';
import mapDataStates from '../assets/maps/germany_states.geo.json';
import MapsD3 from '../components/MapsD3';

import {doughnutOptions, lineOptions, barOptions} from '../utils/demo/chartsData';
import {Bar, Doughnut, Line} from 'react-chartjs-2';

function Dashboard() {
    return (
        <>
            <PageTitle>Dashboard</PageTitle>

            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                {/* <!-- Card --> */}
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Users</p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">6389</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fill-rule="evenodd"
                                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Revenue</p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">$ 46,760.89</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Sales</p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">376</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-pink-500 bg-pink-100 rounded-full dark:text-pink-100 dark:bg-pink-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fill-rule="evenodd"
                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Leads</p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">35</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 mb-8 md:grid-cols-3">
                <div className="bg-white p-4 rounded shadow-xl dark:bg-gray-800 dark:text-gray-300">
                    <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">Geo Distribution</p>
                    <MapsD3 mapData={mapDataStates.features} />
                </div>

                <div className="md:col-span-2 w-full rounded overflow-hidden shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full leading-normal md:col-span-2 bg-white p-4 rounded shadow-xl dark:bg-gray-800 dark:text-gray-100">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Client / Invoice
                                    </th>
                                    <th className="px-5 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-5 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Issued / Due
                                    </th>
                                    <th className="px-5 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-5 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-100"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <div className="flex">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img
                                                    className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">Molly Sanders</p>
                                                <p className="text-gray-600 whitespace-no-wrap">000004</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                                        <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                                        <p className="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                            ></span>
                                            <span className="relative">Paid</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm text-right">
                                        <button
                                            type="button"
                                            className="inline-block text-gray-500 hover:text-gray-700"
                                        >
                                            <svg className="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <div className="flex">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img
                                                    className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">Michael Roberts</p>
                                                <p className="text-gray-600 whitespace-no-wrap">000003</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">$214,000</p>
                                        <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">Sept 25, 2019</p>
                                        <p className="text-gray-600 whitespace-no-wrap">Due in 6 days</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                            ></span>
                                            <span className="relative">Paid</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm text-right">
                                        <button
                                            type="button"
                                            className="inline-block text-gray-500 hover:text-gray-700"
                                        >
                                            <svg className="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <div className="flex">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img
                                                    className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">Devin Childs</p>
                                                <p className="text-gray-600 whitespace-no-wrap">000002</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                                        <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">Sept 14, 2019</p>
                                        <p className="text-gray-600 whitespace-no-wrap">Due in 2 weeks</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                                            ></span>
                                            <span className="relative">Pending</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm text-right">
                                        <button
                                            type="button"
                                            className="inline-block text-gray-500 hover:text-gray-700"
                                        >
                                            <svg className="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <div className="flex">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img
                                                    className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">Frederick Nicholas</p>
                                                <p className="text-gray-600 whitespace-no-wrap">000001</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">$12,000</p>
                                        <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">Sept 6, 2019</p>
                                        <p className="text-gray-600 whitespace-no-wrap">Due 3 weeks ago</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span
                                                aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                            ></span>
                                            <span className="relative">Overdue</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 bg-white dark:bg-gray-800 dark:text-gray-300 text-sm text-right">
                                        <button
                                            type="button"
                                            className="inline-block text-gray-500 hover:text-gray-700"
                                        >
                                            <svg className="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 mb-8 md:grid-cols-2">
                <div className="bg-white p-4 rounded shadow-xl dark:bg-gray-800 dark:text-gray-300">
                    <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">MQL Distribution</p>
                    <Doughnut {...doughnutOptions} />
                </div>
                <div className="bg-white p-4 rounded shadow-xl dark:bg-gray-800 dark:text-gray-300">
                    <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">Sales Distribution</p>
                    <Bar {...barOptions} />
                </div>
            </div>

            <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">Revenue Distribution</p>
                <Line {...lineOptions} />
            </div>
        </>
    );
}

export default Dashboard;
