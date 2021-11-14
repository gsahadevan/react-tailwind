import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layouts';
import Page404 from './pages/404';
import Blank from './pages/Blank';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="blank" element={<Blank />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </div>
    );
}
