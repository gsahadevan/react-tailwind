import React, {useState} from 'react';
import PageTitle from '../components/Typography/PageTitle';
import mapDataStates from '../assets/maps/germany_states.geo.json';
import MapsD3 from '../components/MapsD3';
import worldMap from '../assets/maps/world.geo.json';

import {doughnutOptions, lineOptions, barOptions} from '../utils/demo/chartsData';
import {Bar, Doughnut, Line} from 'react-chartjs-2';
import Tables from './Tables';
import WorldMap from '../components/MapsD3/WorldMap';

function Dashboard() {
    const [property, setProperty] = useState('pop_est');

    return (
        <>
            <PageTitle>Dashboard</PageTitle>

            <div className="grid gap-4 md:mb-12 mb-4 lg:grid-cols-4 md:grid-cols-2">
                {/* <!-- Card --> */}
                <div className="flex items-center p-4 bg-white rounded shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Users</p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">515</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className="flex items-center p-4 bg-white rounded shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Revenue</p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">€ 454.867,00</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className="flex items-center p-4 bg-white rounded shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Sales</p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">654</p>
                    </div>
                </div>
                {/* <!-- Card --> */}
                <div className="flex items-center p-4 bg-white rounded shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-pink-500 bg-pink-100 rounded-full dark:text-pink-100 dark:bg-pink-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Leads</p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">19</p>
                    </div>
                </div>
            </div>

            {/* <div className="grid gap-4 md:mb-12 mb-4 lg:grid-cols-4 md:grid-cols-2">
                <div className="bg-white p-4 rounded shadow-xs dark:bg-gray-800">
                    <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">Geo Distribution</p>
                    <div className="relative w-full">
                        <MapsD3 mapData={mapDataStates.features} />
                    </div>
                </div>
            </div> */}

            <div className="grid gap-6 mb-8 lg:grid-cols-3 md:grid-cols-1">
                {/* <div className="bg-white p-4 rounded shadow-xs dark:bg-gray-800">
                    <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">Geo Distribution</p>
                    <MapsD3 mapData={mapDataStates.features} />
                </div> */}

                <div className="bg-white rounded shadow-xs dark:bg-gray-800 dark:text-gray-300 p-4">
                    <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">D3 - World Map</p>
                    <WorldMap data={worldMap} property={property} />
                </div>

                <div className="md:col-span-2 min-w-0 p-4 bg-white rounded shadow-xs dark:bg-gray-800">
                    <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">Revenue Distribution</p>
                    <div className="relative w-full">
                        <Line {...lineOptions} />
                    </div>
                </div>
            </div>

            <div className="grid gap-6 mb-8 md:grid-cols-2">
                <div className="bg-white p-4 rounded shadow-xs dark:bg-gray-800 dark:text-gray-300">
                    <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">MQL Distribution</p>
                    <div className="relative w-full">
                        <Doughnut {...doughnutOptions} />
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow-xs dark:bg-gray-800 dark:text-gray-300">
                    <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">Sales Distribution</p>
                    <div className="relative w-full">
                        <Bar {...barOptions} />
                    </div>
                </div>
            </div>

            <div className="min-w-0 w-full overflow-hidden rounded shadow-xs bg-white dark:bg-gray-800">
                <div className="relative w-full overflow-x-auto">
                    <Tables />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
