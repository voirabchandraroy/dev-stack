import { type Dispatch, type SetStateAction } from "react";
import type { Technology } from "../types/types";
import { toast } from "react-toastify/unstyled";

interface YourStackProps {
    stack: Technology[];
    setStack: Dispatch<SetStateAction<Technology[]>>;
}

const YourStack = ({ stack, setStack }: YourStackProps) => {

    const handleRemove = (technology: Technology) => {
        const newStack: Technology[] = [];

        for (const item of stack) {
            if (item.id !== technology.id) {
                newStack.push(item);
            }
        }

        setStack(newStack);

        toast.info(`${technology.name} removed from your stack.`);
    };

    const handleRemoveAll = () => {
        setStack((prev) => prev.filter(() => false));
        toast.info("All technologies removed from your stack.");
    };

    return (
        <aside className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#17191a] p-5 shadow-sm">

            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Your Stack
                </h2>
            </div>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {stack.length} Technology Selected
            </p>

            <div className="mt-5 flex flex-col gap-3">

                {stack.length === 0 ? (

                    <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-700 px-4 py-10 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Your stack is empty. Add technologies from the list to
                            start building it.
                        </p>
                    </div>

                ) : (

                    stack.map((technology) => (

                        <div
                            key={technology.id}
                            className="flex items-center gap-3 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#202326] px-3 py-2.5"
                        >

                            {/* Technology Icon */}
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#17191a] p-1.5">
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            {/* Technology Info */}
                            <div className="min-w-0 flex-1">

                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                    {technology.name}
                                </p>

                                <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                                    {technology.category}
                                </p>

                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() => handleRemove(technology)}
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950/40 dark:hover:text-pink-400"
                            >
                                ✕
                            </button>

                        </div>

                    ))
                )}

            </div>

            {/* Remove All */}
            {stack.length > 0 && (
                <button
                    onClick={handleRemoveAll}
                    className="mt-5 w-full rounded-xl border border-pink-200 dark:border-pink-900/60 bg-white dark:bg-[#17191a] py-2.5 text-sm font-semibold text-pink-600 dark:text-pink-400 transition hover:bg-pink-50 dark:hover:bg-pink-950/30"
                >
                    Remove All
                </button>
            )}

        </aside>
    );
};

export default YourStack;