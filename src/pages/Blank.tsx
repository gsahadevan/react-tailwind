import Headline from '../components/base/typography/Headline';

const Blank = (): JSX.Element => {
    return (
        <>
            <Headline>Blank</Headline>

            <div className="mx-auto grid grid-cols-1 items-start gap-8 sm:max-w-lg lg:max-w-[63rem] lg:grid-cols-2">
                <div className="relative">
                    <div className="absolute -top-72 bottom-[40%] left-1/2 -ml-[55vw] w-[110vw] bg-slate-50 text-slate-600/10 lg:hidden">
                        <svg className="absolute inset-0 h-full w-full z-10 [mask-image:linear-gradient(to_top,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="all-access-grid-pattern-2" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                                    <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#all-access-grid-pattern-2)"></rect>
                        </svg>
                    </div>
                    <div className="relative z-20 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl">
                        <div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                            <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        </div>
                        <div className="relative bg-white p-5 py-10 sm:rounded-3xl sm:px-10">
                            <div className="flex">
                                <svg className="h-14 w-14 flex-none" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0EA5E9" stroke-width="1.5">
                                    <path d="M28 33.75c-4.388 0-8.36 2.385-10.627 5.636-1.006 1.443-.428 3.372 1.131 4.187C21.326 45.048 24.771 46 28 46c3.23 0 6.674-.952 9.496-2.427 1.559-.815 2.137-2.744 1.13-4.187C36.36 36.136 32.389 33.75 28 33.75Z" fill="#E0F2FE"></path>
                                    <circle cx="28" cy="24" r="6.25" fill="#E0F2FE"></circle>
                                    <path d="M44.002 38A19.912 19.912 0 0 0 48 26c0-11.046-8.954-20-20-20S8 14.954 8 26c0 4.502 1.488 8.657 3.998 12" stroke-linecap="round"></path>
                                </svg>
                                <div className="ml-4">
                                    <h2 className="text-base font-semibold leading-7 text-slate-900">Personal</h2>
                                    <p className="text-sm leading-6 text-slate-700">For individuals working on their next big idea.</p>
                                </div>
                            </div>
                            <div className="relative -mx-5 mt-8 ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl">
                                <div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
                                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                                </div>
                                <div className="relative flex flex-col bg-slate-50 px-5 py-8 sm:rounded-2xl">
                                    <p className="flex items-center justify-center">
                                        <span className="text-[2.5rem] leading-none text-slate-900">€<span className="font-bold">249</span></span>
                                        <span className="ml-3 text-sm">
                                            <span className="font-semibold text-slate-900">one-time payment</span>
                                            <br/>
                                            <span className="text-slate-500">plus local taxes</span>
                                        </span>
                                    </p>
                                    <p className="order-last -mx-1 mt-4 flex justify-center text-sm leading-6 text-slate-500 sm:space-x-2"><span className="hidden sm:inline">Lifetime access.</span><span className="hidden sm:inline">Unlimited projects.</span><span className="hidden sm:inline">Free updates.</span><span className="sm:hidden">Includes lifetime access and free updates.</span></p>
                                    <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-900 text-white hover:bg-slate-700 mt-6 w-full" href="https://tailwindui.com/checkout/aa651062-caee-4517-b83a-d2aed4cd00cc"><span>Get all-access</span></a>
                                </div>
                            </div>
                            <h3 className="sr-only">All-access features</h3>
                            <ul className="mt-8 space-y-8 text-sm leading-6 text-slate-700">
                                <li className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="h-8 w-8 flex-none">
                                        <path fill="#fff" d="M0 0h32v32H0z"></path>
                                        <path fill="#E0F2FE" d="M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"></path>
                                        <path fill="#0EA5E9" d="M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"></path>
                                    </svg>
                                    <p className="ml-6"><strong className="font-semibold text-slate-900">Over 500+ components</strong> — everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more.</p>
                                </li>
                                <li className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="h-8 w-8 flex-none">
                                        <path fill="#fff" d="M0 0h32v32H0z"></path>
                                        <rect width="23" height="22" x="3" y="5" stroke="#0EA5E9" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect>
                                        <rect width="10" height="18" x="19" y="9" fill="#E0F2FE" stroke="#0EA5E9" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect>
                                        <circle cx="6" cy="8" r="1" fill="#0EA5E9"></circle>
                                        <circle cx="9" cy="8" r="1" fill="#0EA5E9"></circle>
                                        <path stroke="#0EA5E9" stroke-width="1.5" d="M3 11h16"></path>
                                    </svg>
                                    <p className="ml-6"><strong className="font-semibold text-slate-900">Every site template</strong> — beautifully designed, expertly crafted website templates built with modern technologies like React and Next.js.</p>
                                </li>
                                <li className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="h-8 w-8 flex-none">
                                        <path fill="#fff" d="M0 0h32v32H0z"></path>
                                        <path fill="#E0F2FE" d="M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"></path>
                                        <path stroke="#0EA5E9" stroke-linecap="round" stroke-width="1.5" d="M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"></path>
                                        <circle cx="16" cy="16" r="14" stroke="#0EA5E9" stroke-width="1.5"></circle>
                                    </svg>
                                    <p className="ml-6"><strong className="font-semibold text-slate-900">Lifetime access</strong> — get instant access to everything we have today, plus any new components and templates we add in the future.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -left-[calc(1rem+55vw)] -top-72 bottom-14 hidden w-[110vw] bg-slate-50 text-slate-600/10 lg:block">
                        <svg className="absolute inset-0 h-full w-full z-10 [mask-image:linear-gradient(to_top,white,transparent)]" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="all-access-grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)">
                                    <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#all-access-grid-pattern)"></rect>
                        </svg>
                    </div>
                    <div className="relative z-10 -mx-4 bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] px-5 py-10 shadow-lg sm:mx-0 sm:rounded-3xl sm:px-10">
                        <div className="flex">
                            <svg className="h-14 w-14 flex-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21" cy="26" r="4.25" fill="#94A3B8" fill-opacity=".2" stroke="#94A3B8" stroke-width="1.5"></circle>
                                <path d="M15.318 43.465c-.972-.798-1.374-2.073-1.196-3.318l.03-.207A6.918 6.918 0 0 1 21 34c3.443 0 6.389 2.717 6.875 6.125l.463-4.162a6.704 6.704 0 0 1 13.325 0l.457 4.112c.132 1.19-.26 2.394-1.172 3.169A19.92 19.92 0 0 1 28 48a19.918 19.918 0 0 1-12.682-4.535Z" fill="#94A3B8" fill-opacity=".2"></path>
                                <path d="m14.152 39.94.742.106-.742-.106Zm13.723.185-.742.106a.75.75 0 0 0 1.488-.023l-.746-.083Zm.463-4.162-.746-.083.746.083Zm13.325 0 .745-.083-.745.083Zm.457 4.112-.746.083.746-.083Zm-1.172 3.169-.486-.572.486.572Zm-25.63.221-.476.58.476-.58Zm-1.909-3.631-.03.207 1.486.212.03-.207-1.486-.212ZM21 33.25a7.668 7.668 0 0 0-7.59 6.584l1.484.212A6.168 6.168 0 0 1 21 34.75v-1.5Zm7.618 6.769C28.082 36.266 24.84 33.25 21 33.25v1.5c3.046 0 5.695 2.418 6.133 5.481l1.485-.212Zm-1.026-4.139-.462 4.162 1.49.166.463-4.162-1.49-.166ZM35 29.25a7.454 7.454 0 0 0-7.408 6.63l1.491.166A5.954 5.954 0 0 1 35 30.75v-1.5Zm7.408 6.63A7.454 7.454 0 0 0 35 29.25v1.5a5.954 5.954 0 0 1 5.918 5.296l1.49-.166Zm.457 4.112-.457-4.111-1.49.165.456 4.112 1.491-.166Zm-2.403 2.68A19.17 19.17 0 0 1 28 47.25v1.5a20.67 20.67 0 0 0 13.434-4.935l-.972-1.143ZM28 47.25a19.167 19.167 0 0 1-12.206-4.364l-.952 1.159A20.668 20.668 0 0 0 28 48.75v-1.5Zm13.374-7.092c.11.981-.218 1.925-.912 2.514l.972 1.143c1.13-.96 1.587-2.426 1.431-3.823l-1.49.166ZM13.38 40.04c-.209 1.462.257 3.014 1.462 4.004l.952-1.16c-.738-.605-1.076-1.604-.93-2.632l-1.484-.212Z" fill="#94A3B8"></path>
                                <circle cx="34.5" cy="21.5" r="4.75" fill="#94A3B8" fill-opacity=".2" stroke="#94A3B8" stroke-width="1.5"></circle>
                                <path d="M10.676 38A19.908 19.908 0 0 1 8 28C8 16.954 16.954 8 28 8s20 8.954 20 20c0 3.643-.974 7.058-2.676 10" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"></path>
                            </svg>
                            <div className="ml-4">
                                <h2 className="text-base font-semibold leading-7 text-white">Teams</h2>
                                <p className="text-sm leading-6 text-slate-400">For product teams and agencies.</p>
                            </div>
                        </div>
                        <div className="relative -mx-5 mt-8 flex flex-col bg-slate-700/25 px-5 py-8 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl">
                            <p className="flex items-center justify-center">
                            <span className="text-[2.5rem] leading-none text-white">€<span className="font-bold">749</span></span>
                            <span className="ml-3 text-sm">
                            <span className="font-semibold text-white">one-time payment</span>
                            <br/>
                            <span className="text-slate-400">plus local taxes</span>
                            </span>
                            </p>
                            <p className="order-last -mx-1 mt-4 flex justify-center text-sm leading-6 text-slate-400 sm:space-x-2"><span className="hidden sm:inline">Lifetime access.</span><span className="hidden sm:inline">Unlimited projects.</span><span className="hidden sm:inline">Free updates.</span><span className="sm:hidden">Includes lifetime access and free updates.</span></p>
                            <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-600 text-white hover:bg-slate-500 mt-6 w-full" href="https://tailwindui.com/checkout/cc42453b-bfcd-4a7c-8150-37946e36168e"><span>Get all-access for your team</span></a>
                        </div>
                        <div className="mt-8 flex">
                            <svg className="h-8 w-8 flex-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.75 21.75a3 3 0 0 1 3-3h6.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-6.5a3 3 0 0 1-3-3v-4.5Z" fill="#94A3B8" fill-opacity=".2" stroke="#94A3B8" stroke-width="1.5" stroke-linejoin="round"></path>
                                <path d="M5.75 18.594V17a3.25 3.25 0 0 1 5.327-2.5l.173.156" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <circle cx="9" cy="24" r="1" fill="#94A3B8"></circle>
                                <path d="M8.75 10.25v-3.5a4 4 0 0 1 4-4h12.5a4 4 0 0 1 4 4v18.5a4 4 0 0 1-4 4h-6.5" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.75 17.75h.27c2.967 0 4.978 2.425 5.995 4.055.51.816.162 1.812-.76 2.216-1.288.563-3.234 1.229-5.234 1.229h-.271" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <circle cx="19" cy="11" r="3.25" fill="#94A3B8" fill-opacity=".2" stroke="#94A3B8" stroke-width="1.5" stroke-linejoin="round"></circle>
                            </svg>
                            <div className="ml-6 text-sm leading-6 text-slate-400">
                                <p><strong className="font-semibold text-slate-100">Get access for your entire team</strong> — team licenses include access for up to 25 people to accommodate even the largest teams at your company.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blank;
