import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import _get from 'lodash/get';

const offices = [
    { id: 1, city: 'Los Angeles', address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'] },
    { id: 2, city: 'New York', address: ['886 Walter Streets', 'New York, NY 12345'] },
    { id: 3, city: 'Toronto', address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'] },
    { id: 4, city: 'London', address: ['114 Cobble Lane', 'London N1 2EF'] },
];

export default function ContactView(props) {
    const { values, errors, handleChange = () => {}, handleSubmit = () => {} } = props;
    return (
        <div className="min-h-screen bg-white">
            <main className="overflow-hidden">
                {/* Header */}
                <div className="bg-warm-gray-50">
                    <div className="py-24 lg:py-32">
                        <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                            <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                                Get in touch
                            </h1>
                            <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                                Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus
                                morbi non morbi. In elementum urna ut volutpat. Sagittis et vel et
                                fermentum amet consequat.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact section */}
                <section className="relative bg-white" aria-labelledby="contact-heading">
                    <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />
                    {/* Decorative dot pattern */}
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <svg
                            className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true">
                            <defs>
                                <pattern
                                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse">
                                    <rect
                                        x={0}
                                        y={0}
                                        width={4}
                                        height={4}
                                        className="text-warm-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width={404}
                                height={384}
                                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                            />
                        </svg>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative bg-white shadow-xl">
                            <h2 id="contact-heading" className="sr-only">
                                Contact us
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {/* Contact information */}
                                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12">
                                    {/* Decorative angle backgrounds */}
                                    <div
                                        className="absolute inset-0 pointer-events-none sm:hidden"
                                        aria-hidden="true">
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={343}
                                            height={388}
                                            viewBox="0 0 343 388"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                fill="url(#linear1)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear1"
                                                    x1="254.553"
                                                    y1="107.554"
                                                    x2="961.66"
                                                    y2="814.66"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#fff" />
                                                    <stop
                                                        offset={1}
                                                        stopColor="#fff"
                                                        stopOpacity={0}
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                        aria-hidden="true">
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={359}
                                            height={339}
                                            viewBox="0 0 359 339"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                fill="url(#linear2)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear2"
                                                    x1="192.553"
                                                    y1="28.553"
                                                    x2="899.66"
                                                    y2="735.66"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#fff" />
                                                    <stop
                                                        offset={1}
                                                        stopColor="#fff"
                                                        stopOpacity={0}
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                        aria-hidden="true">
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={160}
                                            height={678}
                                            viewBox="0 0 160 678"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                fill="url(#linear3)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear3"
                                                    x1="192.553"
                                                    y1="325.553"
                                                    x2="899.66"
                                                    y2="1032.66"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#fff" />
                                                    <stop
                                                        offset={1}
                                                        stopColor="#fff"
                                                        stopOpacity={0}
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-white">
                                        Contact information
                                    </h3>
                                    <p className="mt-6 text-base text-teal-50 max-w-3xl">
                                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                                        volutpat massa dictumst amet. Sapien tortor lacus arcu.
                                    </p>
                                    <dl className="mt-8 space-y-6">
                                        <dt>
                                            <span className="sr-only">Phone number</span>
                                        </dt>
                                        <dd className="flex text-base text-teal-50">
                                            <PhoneIcon
                                                className="flex-shrink-0 w-6 h-6 text-teal-200"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-3">+1 (555) 123-4567</span>
                                        </dd>
                                        <dt>
                                            <span className="sr-only">Email</span>
                                        </dt>
                                        <dd className="flex text-base text-teal-50">
                                            <MailIcon
                                                className="flex-shrink-0 w-6 h-6 text-teal-200"
                                                aria-hidden="true"
                                            />
                                            <span className="ml-3">support@workcation.com</span>
                                        </dd>
                                    </dl>
                                </div>

                                {/* Contact form */}
                                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                    <h3 className="text-lg font-medium text-warm-gray-900">
                                        Send us a message
                                    </h3>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault(); // your submit logic here
                                            handleSubmit();
                                        }}
                                        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2
                                        sm:gap-x-8">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-warm-gray-900">
                                                Name
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        autoComplete="name"
                                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                                        value={_get(values, 'name')}
                                                        onChange={handleChange('name')}
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="phone_number"
                                                className="block text-sm font-medium text-warm-gray-900">
                                                Phone Number
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="phone_number"
                                                        id="phone_number"
                                                        autoComplete="phone"
                                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                                        value={_get(values, 'phone_number')}
                                                        onChange={handleChange('phone_number')}
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-warm-gray-900">
                                                Email
                                                <div className="mt-1">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                                        value={_get(values, 'email')}
                                                        onChange={handleChange('email')}
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="role"
                                                className="block text-sm font-medium text-warm-gray-900">
                                                Subject
                                                <div className="mt-1">
                                                    <select
                                                        id="role"
                                                        name="role"
                                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                        value={_get(values, 'role')}
                                                        onChange={handleChange('role')}>
                                                        <option>customer</option>
                                                        <option>supplier</option>
                                                    </select>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="description"
                                                className="block text-sm font-medium text-warm-gray-900">
                                                Description
                                                <div className="mt-1">
                                                    <textarea
                                                        id="description"
                                                        name="description"
                                                        rows={4}
                                                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                                                        aria-describedby="description-max"
                                                        value={_get(values, 'description')}
                                                        onChange={handleChange('description')}
                                                    />
                                                </div>
                                            </label>
                                            <span
                                                id="description-max"
                                                className="text-sm text-warm-gray-500">
                                                Max. 500 characters
                                            </span>
                                        </div>
                                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                                            <button
                                                type="submit"
                                                className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact grid */}
                <section aria-labelledby="offices-heading">
                    <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h2
                            id="offices-heading"
                            className="text-3xl font-extrabold text-warm-gray-900">
                            Our offices
                        </h2>
                        <p className="mt-6 text-lg text-warm-gray-500 max-w-3xl">
                            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id
                            malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            {offices.map((office) => (
                                <div key={office.id}>
                                    <h3 className="text-lg font-medium text-warm-gray-900">
                                        {office.city}
                                    </h3>
                                    <p className="mt-2 text-base text-warm-gray-500">
                                        {office.address.map((line) => (
                                            <span key={line} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
