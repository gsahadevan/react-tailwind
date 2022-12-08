import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layouts';
import Page404 from './pages/404';
import Blank from './pages/Blank';
import Components from './pages/Components';
import Dashboard from './pages/Dashboard';
import Filters from './pages/Filter';
import Foot from './pages/Foot';
import Head from './pages/Head';
import Login from './pages/Login';
import Maps from './pages/Maps';
import Modals from './pages/Modals';

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="core-components" element={<Components />} />
                    <Route path="blank" element={<Blank />} />
                    <Route path="modals" element={<Modals />} />
                    <Route path="filters" element={<Filters />} />
                    <Route path="head" element={<Head />} />
                    <Route path="foot" element={<Foot />} />
                    <Route path="maps" element={<Maps />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </div>
    );
}
