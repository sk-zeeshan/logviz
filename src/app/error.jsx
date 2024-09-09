"use client";
import React from "react";

const Error = () => {
  return (
      <section className="bg-white dark:bg-gray-900">
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="bg-white shadow rounded-2xl p-4">
            <p className="text-sm font-small text-red-500 dark:text-blue-400">
              Error!
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Oops!
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Something went wrong!
            </p>
          </div>
        </div>
      </section>
  );
};

export default Error;