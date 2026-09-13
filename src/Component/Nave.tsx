import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

                <div className="h-16 relative flex items-center justify-between">


                    <div className="flex items-center">

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden flex items-center justify-center w-9 h-9 text-gray-700 hover:text-pink-500 transition shrink-0"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>


                        <div className="hidden md:block w-32">
                            <img
                                src={logo}
                                alt="Dev Stack Logo"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                    </div>


                    <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
                        <div className="w-16 sm:w-20">
                            <img
                                src={logo}
                                alt="Dev Stack Logo"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>


                    <ul className="hidden md:flex items-center justify-center gap-4 lg:gap-7 flex-1">

                        <li className="text-sm lg:text-base font-medium text-gray-700 hover:text-pink-500 transition whitespace-nowrap cursor-pointer">
                            Home
                        </li>

                        <li className="text-sm lg:text-base font-medium text-gray-700 hover:text-pink-500 transition whitespace-nowrap cursor-pointer">
                            Technologies
                        </li>

                        <li className="text-sm lg:text-base font-medium text-gray-700 hover:text-pink-500 transition whitespace-nowrap cursor-pointer">
                            Projects
                        </li>

                        <li className="text-sm lg:text-base font-medium text-gray-700 hover:text-pink-500 transition whitespace-nowrap cursor-pointer">
                            About
                        </li>

                        <li className="text-sm lg:text-base font-medium text-gray-700 hover:text-pink-500 transition whitespace-nowrap cursor-pointer">
                            Contact
                        </li>

                    </ul>

                    <div className="flex items-center justify-end gap-0.5 sm:gap-2 shrink-0">

                        <button
                            className="
                        px-1.5 sm:px-3
                        py-2
                        text-[11px] sm:text-sm lg:text-base
                        font-medium
                        text-gray-700
                        hover:text-pink-500
                        transition
                        whitespace-nowrap
                    "
                        >
                            Sign In
                        </button>

                        <button
                            className="
                        px-2.5 sm:px-4 lg:px-5
                        py-2
                        text-[11px] sm:text-sm lg:text-base
                        font-semibold
                        text-white
                        rounded-full
                        bg-linear-to-r
                        from-orange-500
                        via-pink-500
                        to-violet-600
                        hover:opacity-90
                        transition
                        shadow-sm
                        whitespace-nowrap
                    "
                        >
                            Sign Up
                        </button>

                    </div>

                </div>

                {menuOpen && (
                    <div className="md:hidden border-t border-gray-100 py-3">

                        <ul className="flex flex-col gap-1">

                            <li className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition cursor-pointer">
                                Home
                            </li>

                            <li className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition cursor-pointer">
                                Technologies
                            </li>

                            <li className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition cursor-pointer">
                                Projects
                            </li>

                            <li className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition cursor-pointer">
                                About
                            </li>

                            <li className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition cursor-pointer">
                                Contact
                            </li>

                        </ul>

                    </div>
                )}

            </div>
        </nav>
    );
};

export default Nav;