import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <body class="overflow-x-hidden antialiased">
      <header class="relative z-50 w-full h-24">
        <div class="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
          <a
            href="/"
            class="relative flex items-center inline-block h-5 h-full font-black leading-none"
          >
            <span class="ml-3 text-xl text-gray-800">broken vessel</span>
          </a>

          <nav
            id="nav"
            class="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative"
          >
            <div class="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
              <a
                href="#_"
                class="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-indigo-700 fold-bold"
              >
                Go back Home
              </a>
            </div>
          </nav>

          <div class="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
            <a
              href="#_"
              class="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-white lg:text-indigo-700 sm:w-full lg:shadow-none hover:shadow-xl"
            >
              Go back Home
            </a>
          </div>
        </div>
      </header>

      <div class="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
        <div class="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
          <div class="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 class="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              Need someone to talk to?
            </h1>
            <p class="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
              Are you ready to start your adventure and start building the next
              greatest SAAS app on the market?
            </p>
            <button
              onClick={() => loginWithRedirect()}
              className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
            >
              Get Started
            </button>

            {isAuthenticated && (
              <button
                onClick={() => loginWithRedirect()}
                className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
              >
                LOg Out
              </button>
            )}
          </div>
          <div class="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <div class="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
              <img
                src="https://cdn.devdojo.com/images/september2020/macbook-mockup.png"
                class="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"
              />
            </div>
          </div>
        </div>
      </div>

      <footer class="px-4 pb-8 text-white bg-white border-t border-gray-200">
        <div class="pt-4 pt-6 mt-10 text-center text-gray-500 border-t border-gray-100">
          © 2021 Broken Vessel Uganda. All rights reserved.
        </div>
      </footer>
    </body>
  );
};

export default Home;
