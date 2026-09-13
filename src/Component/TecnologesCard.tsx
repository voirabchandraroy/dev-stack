import { use, type Dispatch, type SetStateAction } from "react";
import type { Technology } from "../types/types";
import { toast } from "react-toastify/unstyled";

interface TecnologesProps {
    technologiesPromise: Promise<Technology[]>;
    stack: Technology[];
    setStack: Dispatch<SetStateAction<Technology[]>>;
}

const Tecnologes = ({ technologiesPromise, stack, setStack }: TecnologesProps) => {
    const technologies = use(technologiesPromise);

    const handleAdd = (technology: Technology) => {
        let alreadyAdded = false;

        for (const item of stack) {
            if (item.id === technology.id) {
                alreadyAdded = true;
            }
        }

        if (alreadyAdded) {
            return;
        }

        const newStack = [...stack, technology];
        setStack(newStack);
        toast.success(`${technology.name} added to your stack!`);
    };

    return (
        <section className="pb-16">

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {technologies.map((technology) => {
                    let isAdded = false;

                    for (const item of stack) {
                        if (item.id === technology.id) {
                            isAdded = true;
                            break;
                        }
                    }

                    return (
                        <div
                            key={technology.id}
                            className="
                                flex
                                flex-col
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-5
                                shadow-sm
                                transition-colors
                                hover:border-gray-300
                                dark:border-gray-700
                                dark:bg-[#17191a]
                                dark:hover:border-gray-600
                            "
                        >

                            {/* Card Header */}
                            <div className="flex items-start justify-between gap-3">

                                {/* Technology Icon */}
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-[#202326]">
                                    <img
                                        src={technology.icon}
                                        alt={`${technology.name} icon`}
                                        className="h-full w-full object-contain"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                </div>

                                {/* Badge */}
                                <span
                                    className="
                                        rounded-full
                                        bg-linear-to-r
                                        from-orange-500
                                        via-pink-500
                                        to-violet-600
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-white
                                    "
                                >
                                    {technology.badge}
                                </span>

                            </div>

                            {/* Technology Name */}
                            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                {technology.name}
                            </h3>

                            {/* Description */}
                            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                {technology.description}
                            </p>

                            {/* Category + Difficulty */}
                            <div className="mt-4 flex flex-wrap items-center gap-2">

                                {/* Category */}
                                <span
                                    className="
                                        rounded-full
                                        border
                                        border-gray-200
                                        px-2.5
                                        py-1
                                        text-xs
                                        font-medium
                                        text-gray-500
                                        dark:border-gray-700
                                        dark:text-gray-400
                                    "
                                >
                                    {technology.category}
                                </span>

                                {/* Difficulty */}
                                <span
                                    className="
                                        rounded-full
                                        border
                                        border-gray-200
                                        px-2.5
                                        py-1
                                        text-xs
                                        font-medium
                                        text-gray-500
                                        dark:border-gray-700
                                        dark:text-gray-400
                                    "
                                >
                                    {technology.difficulty}
                                </span>

                                {/* Rating */}
                                <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-gray-900 dark:text-white">
                                    <svg
                                        className="h-4 w-4 text-orange-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
                                    </svg>

                                    {technology.rating}
                                </span>

                            </div>

                            {/* Add Button */}
                            <button
                                onClick={() => handleAdd(technology)}
                                disabled={isAdded}
                                className={`
                                    mt-5
                                    w-full
                                    rounded-xl
                                    px-4
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    transition-transform
                                    ${
                                        isAdded
                                            ? "cursor-not-allowed border border-gray-200 bg-gray-100 text-gray-400 dark:border-gray-700 dark:bg-[#202326] dark:text-gray-500"
                                            : "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:scale-[1.02]"
                                    }
                                `}
                            >
                                {isAdded
                                    ? "✓ Add to Stack"
                                    : "Add to Stack"}
                            </button>

                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default Tecnologes;