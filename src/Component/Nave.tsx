import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-700 dark:bg-[#17191a]/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">

                {/* Mobile Menu + Desktop Logo */}
                <div className="flex items-center">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:text-pink-500 dark:border-gray-700 dark:text-gray-200 md:hidden"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
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
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>

                    <div className="hidden w-32 md:block">
                        <img
                            src={logo}
                            alt="Dev Stack Logo"
                            className="h-auto w-full object-contain"
                        />
                    </div>

                </div>

                {/* Mobile Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
                    <div className="w-16 sm:w-20">
                        <img
                            src={logo}
                            alt="Dev Stack Logo"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-8 md:flex">

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            Contact
                        </a>
                    </li>

                </ul>

                {/* Auth Buttons */}
                <div className="flex flex-none items-center gap-2 sm:gap-3">

                    <button
                        className="hidden text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white min-[420px]:block"
                    >
                        Sign In
                    </button>

                    <button
                        className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/10 transition-transform hover:scale-[1.03] sm:px-5"
                    >
                        Sign Up
                    </button>

                </div>

            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="border-t border-gray-200 bg-white px-5 py-4 dark:border-gray-700 dark:bg-[#17191a] md:hidden">

                    <ul className="flex flex-col gap-1">

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                            >
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                            >
                                Contact
                            </a>
                        </li>

                        <li className="pt-2 min-[420px]:hidden">
                            <button
                                className="w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                            >
                                Sign In
                            </button>
                        </li>

                    </ul>

                </div>
            )}

        </nav>
    );
};

export default Nav;