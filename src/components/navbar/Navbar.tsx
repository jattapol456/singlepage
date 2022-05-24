
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-BG-main">
        <div className="mx-auto px-6 sm:px-6">
          <div className="flex items-center w-full justify-between h-16">
            <div className=" flex justify-between w-full items-center">
              <div className="logo">
                <img className="h-12" src={"./logo.png"} />
              </div>
              <div className="hidden xl:block space-x-10 text-Text-main">
                <a className="hover:text-white text-base text-Text-main" href="#decentralize novel">
                  decentralize novel
                </a>
                <a className="hover:text-white text-base" href="#how it work">
                  how it work
                </a>
                <a className="hover:text-white text-base" href="#novel list">
                  novel list
                </a>
                <a className="hover:text-white text-base" href="#ecosystem">
                  ecosystem
                </a>
                <a className="hover:text-white text-base" href="#nfts">
                  nfts
                </a>
                <a className="hover:text-white text-base" href="#partner">
                  partner
                </a>
              </div>
              <div className="hidden xl:block space-x-5">
                <button className="p-2 px-5 text-base font-bold text-white bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white">
                  Lunch App
                </button>
                <button className="p-2 px-5 text-base font-bold text-white bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white">
                  Connet Wallet
                </button>
              </div>
            </div>
            <div className="-mr-2 flex xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="xl:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#decentralize novel"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  decentralize novel
                </a>

                <a
                  href="#how it work"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  how it work
                </a>

                <a
                  href="#novel list"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  novel list
                </a>

                <a
                  href="#ecosystem"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  ecosystem
                </a>

                <a
                  href="#nfts"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  nfts
                </a>

                <a
                  href="#partner"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  partner
                </a>
                <div className="flex flex-col mx-auto justify-center space-y-4">
                  <button className="p-2 px-5 text-base font-bold text-white bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring-offset-0 focus:ring-white">
                    Lunch App
                  </button>
                  <button className="p-2 px-5 text-base font-bold text-white bg-Button-main rounded hover:bg-Text-main active:bg-Text-main focus:outline-none focus:ring focus:ring-white">
                    Connet Wallet
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;