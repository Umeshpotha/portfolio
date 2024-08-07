import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5 sm:px-20 md:px-32">
        <Head>
          <title>Umesh Potha </title>
        </Head>
        <div className="lg:col-span-3  bg-white rounded-2xl col-span-12 p-4 text-center dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 flex flex-col overflow-hidden dark:bg-dark-500">
          <Navbar />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}
