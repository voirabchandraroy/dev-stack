import heroImage from '../assets/banner-stack.png'

const Herosection = () => {
    return (
 <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="min-h-[calc(100vh-64px)] lg:min-h-0 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 py-12 lg:py-10">

                    <div className="w-full lg:w-1/2">

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                            Build Your Ideal
                            <br />

                            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>


                        <p className="mt-6 max-w-xl text-base sm:text-lg leading-7 text-gray-600">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">

                            <button
                                className="
                                    px-5 py-3
                                    rounded-lg
                                    text-sm sm:text-base
                                    font-semibold
                                    text-white
                                    bg-linear-to-r
                                    from-orange-500
                                    via-pink-500
                                    to-violet-600
                                    hover:opacity-90
                                    transition
                                    shadow-sm
                                "
                            >
                                Explore Technologies
                            </button>


                            <button
                                className="
                                    px-6 py-3
                                    rounded-lg
                                    text-sm sm:text-base
                                    font-medium
                                    text-gray-700
                                    border border-gray-200
                                    hover:bg-gray-50
                                    hover:border-gray-300
                                    transition
                                "
                            >
                                Learn More
                            </button>

                        </div>

                    </div>


                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

                        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                            <img
                                src={heroImage}
                                alt="Development Stack"
                                className="
                                    w-full
                                    h-auto
                                    object-contain
                                "
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Herosection;