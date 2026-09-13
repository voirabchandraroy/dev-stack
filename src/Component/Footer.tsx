import logo from "../assets/logo-text.png";

const PRODUCT_LINKS = ["Home", "Technologies", "Projects"];
const COMPANY_LINKS = ["About", "Contact", "Careers"];
const LEGAL_LINKS = ["Privacy Policy", "Terms of Service"];
const SOCIAL_LINKS = ["GitHub", "Twitter", "LinkedIn"];

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-100 bg-gray-200">
            <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">

                {/* ================= TOP: BRAND + LINK GROUPS ================= */}
                <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:gap-10 md:text-left">

                    {/* ================= BRAND BLOCK ================= */}
                    <div className="flex max-w-sm flex-col items-center md:items-start">

                        <div className="w-32">
                            <img
                                src={logo}
                                alt="Dev Stack Logo"
                                className="h-auto w-full object-contain"
                            />
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-gray-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <ul className="mt-4 flex items-center gap-3 text-sm font-medium text-gray-700">
                            {SOCIAL_LINKS.map((social, index) => (
                                <li key={social} className="flex items-center gap-3">
                                    <span className="cursor-pointer transition hover:text-pink-500">
                                        {social}
                                    </span>
                                    {index < SOCIAL_LINKS.length - 1 && (
                                        <span className="text-gray-300">•</span>
                                    )}
                                </li>
                            ))}
                        </ul>

                    </div>


                    {/* ================= LINK GROUPS ================= */}
                    <div className="hidden gap-16 md:flex">

                        <div>
                            <h3 className="text-xs font-semibold tracking-wide text-gray-900">
                                PRODUCT
                            </h3>
                            <ul className="mt-4 flex flex-col gap-2.5">
                                {PRODUCT_LINKS.map((link) => (
                                    <li
                                        key={link}
                                        className="cursor-pointer text-sm text-gray-500 transition hover:text-pink-500"
                                    >
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-semibold tracking-wide text-gray-900">
                                COMPANY
                            </h3>
                            <ul className="mt-4 flex flex-col gap-2.5">
                                {COMPANY_LINKS.map((link) => (
                                    <li
                                        key={link}
                                        className="cursor-pointer text-sm text-gray-500 transition hover:text-pink-500"
                                    >
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-semibold tracking-wide text-gray-900">
                                LEGAL
                            </h3>
                            <ul className="mt-4 flex flex-col gap-2.5">
                                {LEGAL_LINKS.map((link) => (
                                    <li
                                        key={link}
                                        className="cursor-pointer text-sm text-gray-500 transition hover:text-pink-500"
                                    >
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>


                {/* ================= BOTTOM BAR ================= */}
                <div className="mt-10 flex flex-col items-center gap-3 border-t border-gray-100 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">

                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <ul className="flex items-center gap-4">
                        <li className="cursor-pointer transition hover:text-pink-500">
                            Privacy
                        </li>
                        <li className="cursor-pointer transition hover:text-pink-500">
                            Terms
                        </li>
                    </ul>

                </div>

            </div>
        </footer>
    );
};

export default Footer;