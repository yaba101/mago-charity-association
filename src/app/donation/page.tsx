import Link from "next/link";
import React from "react";
import { FaArrowCircleLeft, FaArrowLeft, FaBackward } from "react-icons/fa";

const DonationForm = () => {
  return (
    <div className="flex flex-col lg:flex-row py-10 bg-primary">
      <div className="lg:w-1/2 p-4">
        <Link href={"/"}>
          <FaArrowCircleLeft className="text-xl ml-2 mb-4 cursor-pointer" />
        </Link>
        <div className="border border-gray-700 shadow-lg shadow-slate-900 rounded-lg p-6">
          <h2 className="text-base font-semibold leading-7 text-gray-100">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-300">
            Use a permanent address where you can receive mail.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full bg-gray-300  rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-base"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full bg-gray-300 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-base"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full bg-gray-300 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-base"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="amount"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Amount
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  autoComplete="amount"
                  min={0}
                  className="block w-full bg-gray-300 rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className=" px-4">
          <h1 className="scroll-m-20 text-2xl py-5 font-extrabold tracking-tight lg:text-3xl">
            Mago Charity Association Communtiy
          </h1>
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="Your Video"
            width="100%"
            height="390"
            className="border border-gray-900 shadow-md shadow-slate-950 rounded-lg "
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
