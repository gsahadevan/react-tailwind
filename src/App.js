import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layouts';
import Page404 from './pages/404';
import Blank from './pages/Blank';
import Components from './pages/Components';
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
                    <Route path="core-components" element={<Components />} />
                    <Route path="blank" element={<Blank />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </div>
    );
}

/* This example requires Tailwind CSS v2.0+ */
// import {Fragment, useState} from 'react';
// import {Dialog, Transition} from '@headlessui/react';
// import {XIcon} from '@heroicons/react/outline';

// export default function Example() {
//     const [open, setOpen] = useState(false);

//     return (
//         <>
//             <button
//                 className="bg-purple-900 text-purple-100 px-4 py-2 m-5 rounded"
//                 onClick={() => {
//                     setOpen((open) => !open);
//                 }}
//             >
//                 Hello
//             </button>
//             <Transition.Root show={open} as={Fragment}>
//                 <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
//                     <div className="absolute inset-0 overflow-hidden">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-in-out duration-500"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="ease-in-out duration-500"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                         >
//                             <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//                         </Transition.Child>
//                         <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
//                             <Transition.Child
//                                 as={Fragment}
//                                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                                 enterFrom="translate-x-full"
//                                 enterTo="translate-x-0"
//                                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                                 leaveFrom="translate-x-0"
//                                 leaveTo="translate-x-full"
//                             >
//                                 <div className="relative w-screen max-w-md">
//                                     <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
//                                         <div className="px-4 sm:px-6">
//                                             <Dialog.Title className="text-lg font-medium text-gray-900">
//                                                 Panel title
//                                             </Dialog.Title>

//                                             <button
//                                                 className="bg-purple-900 text-purple-100 px-4 py-2 m-5 rounded"
//                                                 onClick={() => {
//                                                     setOpen((open) => !open);
//                                                 }}
//                                             >
//                                                 <span className="sr-only">Close panel</span>
//                                                 <XIcon className="h-6 w-6" aria-hidden="true" />
//                                             </button>
//                                         </div>
//                                         <div className="mt-6 relative flex-1 px-4 sm:px-6">
//                                             {/* Replace with your content */}
//                                             <div className="absolute inset-0 px-4 sm:px-6">
//                                                 <div
//                                                     className="h-full border-2 border-dashed border-gray-200"
//                                                     aria-hidden="true"
//                                                 />
//                                             </div>
//                                             {/* /End replace */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Transition.Child>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition.Root>
//         </>
//     );
// }
