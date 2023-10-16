import React from "react";
import {ChevronRightIcon} from "@heroicons/react/20/solid";

export default function HomePage() {
    return (
        <>
            <div
                className="flex flex-1 overflow-hidden relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div
                    className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40 lg:px-8">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">

                                <div className="mt-24 sm:mt-32 lg:mt-16">
                                    <a href="#" className="inline-flex space-x-6">
                    <span
                        className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                      What's new
                    </span>
                                        <span
                                            className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>Just shipped v0.1.0</span>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </span>
                                    </a>
                                </div>
                                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Supercharge your web applications
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                    commodo. Elit sunt
                                    amet fugiat veniam occaecat fugiat aliqua.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Documentation
                                    </a>
                                    <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                                        View on GitHub <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"/>
            </div>
        </>
    );
};
