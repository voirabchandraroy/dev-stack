import heroImage from "../assets/banner-stack.png";

const Herosection = () => {
    return (
        <section className="w-full bg-white dark:bg-[#17191a]">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-between gap-10 py-12 lg:min-h-0 lg:flex-row lg:gap-12 lg:py-10">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                            Build Your Ideal
                            <br />

                            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">

                            {/* Explore Technologies */}
                            <button
                                className="
                                    rounded-lg
                                    bg-linear-to-r
                                    from-orange-500
                                    via-pink-500
                                    to-violet-600
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-sm
                                    transition
                                    hover:opacity-90
                                    sm:text-base
                                "
                            >
                                Explore Technologies
                            </button>

                            {/* Learn More */}
                            <button
                                className="
                                    rounded-lg
                                    border
                                    border-gray-200
                                    px-6
                                    py-3
                                    text-sm
                                    font-medium
                                    text-gray-700
                                    transition
                                    hover:border-gray-300
                                    hover:bg-gray-50
                                    dark:border-gray-600
                                    dark:text-gray-200
                                    dark:hover:border-gray-500
                                    dark:hover:bg-gray-800
                                    sm:text-base
                                "
                            >
                                Learn More
                            </button>

                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">

                        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">

                            <img
                                src={heroImage}
                                alt="Development Stack"
                                className="h-auto w-full object-contain"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Herosection;