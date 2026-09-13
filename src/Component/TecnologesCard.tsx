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
                                rounded-2xl
                                border border-gray-200 dark:border-gray-700
                                bg-white dark:bg-[#202223]
                                p-5
                                shadow-sm
                                transition
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >

                            {/* Card Header */}
                            <div className="flex items-start justify-between gap-4">

                                <div className="flex items-center gap-3">

                                    {/* Technology Icon */}
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 p-2">
                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    {/* Name + Category */}
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                            {technology.name}
                                        </h3>

                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {technology.category}
                                        </p>
                                    </div>

                                </div>

                                {/* Badge */}
                                <span
                                    className="
                                        rounded-full
                                        bg-linear-to-r
                                        from-orange-50
                                        via-pink-50
                                        to-violet-50
                                        dark:from-orange-950
                                        dark:via-pink-950
                                        dark:to-violet-950
                                        px-3
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-pink-600
                                        dark:text-pink-400
                                        whitespace-nowrap
                                    "
                                >
                                    {technology.badge}
                                </span>

                            </div>

                            {/* Description */}
                            <p className="mt-5 min-h-18 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                {technology.description}
                            </p>

                            {/* Category + Difficulty */}
                            <div className="mt-5 flex flex-wrap items-center gap-2">

                                <span
                                    className="
                                        rounded-full
                                        bg-gray-100 dark:bg-gray-800
                                        px-3
                                        py-1
                                        text-xs
                                        font-medium
                                        text-gray-600 dark:text-gray-300
                                    "
                                >
                                    {technology.category}
                                </span>

                                <span
                                    className="
                                        rounded-full
                                        bg-gray-100 dark:bg-gray-800
                                        px-3
                                        py-1
                                        text-xs
                                        font-medium
                                        text-gray-600 dark:text-gray-300
                                    "
                                >
                                    {technology.difficulty}
                                </span>

                            </div>

                            {/* Rating + Button */}
                            <div
                                className="
                                    mt-5
                                    flex
                                    items-center
                                    justify-between
                                    border-t
                                    border-gray-100 dark:border-gray-700
                                    pt-4
                                "
                            >

                                {/* Rating */}
                                <div className="flex items-center gap-1">

                                    <span className="text-yellow-500">
                                        ★
                                    </span>

                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        {technology.rating}
                                    </span>

                                </div>

                                {/* Add Button */}
                                <button
                                    onClick={() => handleAdd(technology)}
                                    disabled={isAdded}
                                    className={`
                                        rounded-lg
                                        px-4
                                        py-2
                                        text-sm
                                        font-semibold
                                        transition
                                        ${
                                            isAdded
                                                ? "cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                                                : "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:opacity-90"
                                        }
                                    `}
                                >
                                    {isAdded
                                        ? "✓ Added to Stack"
                                        : "Add to Stack"}
                                </button>

                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default Tecnologes;