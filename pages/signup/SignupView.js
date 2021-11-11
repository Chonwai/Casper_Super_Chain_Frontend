// pages/signup/SignupView.js
import React from 'react';

export default function SignupView() {
    return (
        <>
            <div className="min-h-screen flex">
                <div className="flex-1 flex flex-col justify-center pb-24 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                className="h-12 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                                Sign up to your account
                            </h2>
                        </div>

                        <div className="mt-8">
                            <div className="mt-6">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700">
                                            Email address
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </label>
                                    </div>

                                    <div className="space-y-1">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700">
                                            Password
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </label>
                                    </div>
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="confirm-password"
                                            className="block text-sm font-medium text-gray-700">
                                            Confirm Password
                                            <input
                                                id="confirm-password"
                                                name="confirm-password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </label>
                                    </div>
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="role"
                                            className="block text-sm font-medium text-gray-700">
                                            Role
                                            <select
                                                id="role"
                                                name="role"
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                defaultValue="customer">
                                                <option value="customer">Customer</option>
                                                <option value="supplier">Supplier</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700">
                                            Name
                                            <input
                                                id="name"
                                                name="name"
                                                required
                                                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </label>
                                    </div>
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-gray-700">
                                            Description
                                            <textarea
                                                rows={4}
                                                name="description"
                                                id="description"
                                                className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                defaultValue=""
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}
