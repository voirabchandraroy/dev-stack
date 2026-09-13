import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Herosection from "./Component/Herosection";
import Nave from "./Component/Nave";
import Tecnologes from "./Component/TecnologesCard";
import type { Technology } from "../src/types/types";
import YourStack from "./Component/Yourstack";
import Footer from "./Component/Footer";

const technologiesfetch = async (): Promise<Technology[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();

  return data;
};

const technologiesPromise = technologiesfetch();

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#111315] dark:text-white">

      <Nave />

      <Herosection />

      <main className="mx-auto max-w-7xl px-5 py-16 md:px-8">

        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Explore{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Frontend, backend, databases, and tools — pick what fits
            and add it straight to your stack.
          </p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[1fr_280px]">

          <Suspense
            fallback={
              <div className="text-gray-600 dark:text-gray-300">
                Loading...
              </div>
            }
          >
            <Tecnologes
              technologiesPromise={technologiesPromise}
              stack={stack}
              setStack={setStack}
            />
          </Suspense>

          <YourStack
            stack={stack}
            setStack={setStack}
          />

        </div>
      </main>

      <ToastContainer position="bottom-right" />

      <Footer />

    </div>
  );
}

export default App;