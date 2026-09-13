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
        <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
            </div>

            <p className="mt-1 text-sm text-gray-500">
                {stack.length} Technology Selected
            </p>

            <div className="mt-5 flex flex-col gap-3">
                {stack.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-gray-200 px-4 py-10 text-center">
                        <p className="text-sm text-gray-500">
                            Your stack is empty. Add technologies from the list to
                            start building it.
                        </p>
                    </div>
                ) : (
                    stack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white p-1.5">
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900">
                                    {technology.name}
                                </p>
                                <p className="truncate text-xs text-gray-500">
                                    {technology.category}
                                </p>
                            </div>

                            <button
                                onClick={() => handleRemove(technology)}
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-pink-50 hover:text-pink-600"
                            >
                                ✕
                            </button>
                        </div>
                    ))
                )}
            </div>

            {stack.length > 0 && (
                <button
                    onClick={handleRemoveAll}
                    className="mt-5 w-full rounded-xl border border-pink-200 bg-white py-2.5 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
                >
                    Remove All
                </button>
            )}

        </aside>
    );
};

export default YourStack;