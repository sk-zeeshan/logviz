import React from 'react';

const CustomAlert = ({ show, modalText, onClose }) => {
  if (!show) return null; // Conditionally render the component based on the `show` prop

  return (
    <div
      tabIndex="-1"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-50"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {modalText}
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Ok
            </button>
            <button
              onClick={onClose}
              type="button"
              className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
