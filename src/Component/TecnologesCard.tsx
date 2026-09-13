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
    console.log(technologies);


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
                                border border-gray-200
                                bg-white
                                p-5
                                shadow-sm
                                transition
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >

                            <div className="flex items-start justify-between gap-4">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-2">
                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {technology.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            {technology.category}
                                        </p>
                                    </div>

                                </div>


                                <span className="
                                    rounded-full
                                    bg-linear-to-r
                                    from-orange-50
                                    via-pink-50
                                    to-violet-50
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-pink-600
                                    whitespace-nowrap
                                ">
                                    {technology.badge}
                                </span>

                            </div>


                            <p className="mt-5 min-h-18 text-sm leading-6 text-gray-600">
                                {technology.description}
                            </p>


                            <div className="mt-5 flex flex-wrap items-center gap-2">

                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                    {technology.category}
                                </span>

                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                    {technology.difficulty}
                                </span>

                            </div>


                            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                                <div className="flex items-center gap-1">

                                    <span className="text-yellow-500">
                                        ★
                                    </span>

                                    <span className="text-sm font-semibold text-gray-700">
                                        {technology.rating}
                                    </span>

                                </div>


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
                                    ${isAdded
                                            ? "cursor-not-allowed bg-gray-100 text-gray-400"
                                            : "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:opacity-90"
                                        }`}
                                >
                                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
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